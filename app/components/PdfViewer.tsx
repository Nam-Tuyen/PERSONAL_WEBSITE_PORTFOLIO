"use client"

import { useEffect, useRef, useState } from "react"

type PdfViewerProps = {
  src: string
  title: string
  heightClassName?: string
  borderColor?: string
  loadingLabel?: string
  errorLabel?: string
}

let pdfModulePromise: Promise<any> | null = null

const loadPdfModule = async () => {
  if (!pdfModulePromise) {
    pdfModulePromise = import("pdfjs-dist/build/pdf.mjs").then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
      return pdfjs
    })
  }

  return pdfModulePromise
}

export default function PdfViewer({
  src,
  title,
  heightClassName = "h-[70vh] sm:h-[76vh]",
  borderColor = "1px solid rgba(255,255,255,0.06)",
  loadingLabel = "Loading document...",
  errorLabel = "Unable to load this PDF right now.",
}: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [pdfDocument, setPdfDocument] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const updateWidth = () => setContainerWidth(element.clientWidth)
    updateWidth()

    const observer = new ResizeObserver(() => updateWidth())
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let isCancelled = false
    let loadingTask: any = null
    let nextPdfDocument: any = null

    setIsLoading(true)
    setError(null)
    setPageCount(0)
    setPdfDocument(null)
    canvasRefs.current = []

    ;(async () => {
      try {
        const pdfjs = await loadPdfModule()
        loadingTask = pdfjs.getDocument(src)
        nextPdfDocument = await loadingTask.promise

        if (isCancelled) {
          await nextPdfDocument.destroy()
          return
        }

        setPdfDocument(nextPdfDocument)
        setPageCount(nextPdfDocument.numPages)
      } catch (loadError) {
        if (!isCancelled) {
          setError(loadError instanceof Error ? loadError.message : errorLabel)
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    })()

    return () => {
      isCancelled = true
      if (loadingTask?.destroy) {
        loadingTask.destroy()
      }
      if (nextPdfDocument?.destroy) {
        nextPdfDocument.destroy()
      }
    }
  }, [errorLabel, src])

  useEffect(() => {
    if (!pdfDocument || !pageCount || !containerWidth) return

    let isCancelled = false

    ;(async () => {
      try {
        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
          if (isCancelled) return

          const canvas = canvasRefs.current[pageNumber - 1]
          if (!canvas) continue

          const page = await pdfDocument.getPage(pageNumber)
          const baseViewport = page.getViewport({ scale: 1 })
          const availableWidth = Math.min(Math.max(containerWidth - 24, 240), 960)
          const scale = Math.min(availableWidth / baseViewport.width, 1.35)
          const outputScale = window.devicePixelRatio || 1
          const renderViewport = page.getViewport({ scale: scale * outputScale })
          const cssViewport = page.getViewport({ scale })
          const context = canvas.getContext("2d")

          if (!context) continue

          canvas.width = Math.floor(renderViewport.width)
          canvas.height = Math.floor(renderViewport.height)
          canvas.style.width = `${Math.floor(cssViewport.width)}px`
          canvas.style.height = `${Math.floor(cssViewport.height)}px`

          await page.render({
            canvasContext: context,
            viewport: renderViewport,
          }).promise
        }
      } catch (renderError) {
        if (!isCancelled) {
          setError(renderError instanceof Error ? renderError.message : errorLabel)
        }
      }
    })()

    return () => {
      isCancelled = true
    }
  }, [containerWidth, errorLabel, pageCount, pdfDocument])

  return (
    <div
      ref={containerRef}
      className={`overflow-y-auto overscroll-contain rounded-[18px] bg-white px-3 py-3 sm:px-4 sm:py-4 ${heightClassName}`}
      style={{ border: borderColor, WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
      aria-label={title}
    >
      {isLoading ? (
        <div className="flex h-full min-h-[260px] items-center justify-center text-center text-sm font-medium text-[#4f4f4f] sm:text-base">
          {loadingLabel}
        </div>
      ) : error ? (
        <div className="flex h-full min-h-[260px] items-center justify-center text-center text-sm font-medium text-[#b42318] sm:text-base">
          {errorLabel}
        </div>
      ) : (
        <div className="mx-auto flex w-full max-w-[960px] flex-col gap-4">
          {Array.from({ length: pageCount }, (_, index) => (
            <div key={`${src}-page-${index + 1}`} className="overflow-hidden rounded-[16px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <canvas
                ref={(element) => {
                  canvasRefs.current[index] = element
                }}
                className="mx-auto block h-auto w-full max-w-full bg-white"
                aria-label={`${title} page ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
