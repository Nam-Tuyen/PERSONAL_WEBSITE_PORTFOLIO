"use client"

import { useEffect, useRef, useState } from "react"

type PdfViewerProps = {
  src: string
  title: string
  heightClassName?: string
  borderColor?: string
  loadingLabel?: string
  errorLabel?: string
  helperLabel?: string
  openLabel?: string
  showOpenButton?: boolean
}

let pdfModulePromise: Promise<any> | null = null

const loadPdfModule = async () => {
  if (!pdfModulePromise) {
    pdfModulePromise = import("pdfjs-dist/build/pdf.mjs").then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"
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
  helperLabel = "Scroll to read all pages",
  openLabel = "Open PDF",
  showOpenButton = true,
}: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [pdfDocument, setPdfDocument] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [useNativeViewer, setUseNativeViewer] = useState(false)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (typeof window === "undefined") return
    setZoom(window.innerWidth < 640 ? 1.35 : 1)
  }, [src])

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
    setUseNativeViewer(false)
    setPageCount(0)
    setPdfDocument(null)
    canvasRefs.current = []
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }

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
          setUseNativeViewer(true)
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
          const pagePadding = containerWidth < 640 ? 24 : 48
          const viewportWidth = Math.max(containerWidth - pagePadding, 260)
          const targetWidth = Math.min(viewportWidth * zoom, 1440)
          const scale = Math.min(targetWidth / baseViewport.width, 2.4)
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
          page.cleanup()
        }
      } catch (renderError) {
        if (!isCancelled) {
          setError(renderError instanceof Error ? renderError.message : errorLabel)
          setUseNativeViewer(true)
        }
      }
    })()

    return () => {
      isCancelled = true
    }
  }, [containerWidth, errorLabel, pageCount, pdfDocument, zoom])

  return (
    <div
      ref={containerRef}
      className={`overflow-auto overscroll-contain rounded-[18px] bg-[#f4f4f1] px-3 py-3 sm:px-4 sm:py-4 ${heightClassName}`}
      style={{ border: borderColor, WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y", overscrollBehavior: "contain" }}
      aria-label={title}
    >
      {isLoading ? (
        <div className="flex h-full min-h-[260px] items-center justify-center text-center text-sm font-medium text-[#4f4f4f] sm:text-base">
          {loadingLabel}
        </div>
      ) : useNativeViewer ? (
        <div className="flex h-full min-h-0 flex-col gap-3">
          {showOpenButton ? (
            <div className="flex justify-center">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 sm:text-sm"
              >
                {openLabel}
              </a>
            </div>
          ) : null}
          <iframe src={src} title={title} className="min-h-0 flex-1 rounded-[14px] bg-white" />
        </div>
      ) : error ? (
        <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-4 text-center">
          <div className="text-sm font-medium text-[#b42318] sm:text-base">{errorLabel}</div>
          {showOpenButton ? (
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 sm:text-sm"
            >
              {openLabel}
            </a>
          ) : null}
        </div>
      ) : (
        <div className="mx-auto flex min-w-full w-max flex-col gap-4">
          <div className="sticky top-0 z-[1] flex justify-center pb-1">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-[16px] border border-black/10 bg-white/95 px-2.5 py-2 text-[#4f4f4f] shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur sm:px-3">
              <div className="px-1 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px]">
                {helperLabel}
              </div>
              <button
                type="button"
                onClick={() => setZoom((current) => Math.max(0.8, Number((current - 0.15).toFixed(2))))}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-base font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Zoom out PDF"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="inline-flex min-w-[58px] items-center justify-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111111] transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Reset PDF zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                onClick={() => setZoom((current) => Math.min(2.4, Number((current + 0.15).toFixed(2))))}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-base font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Zoom in PDF"
              >
                +
              </button>
              {showOpenButton ? (
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#111111] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 sm:text-[11px]"
                >
                  {openLabel}
                </a>
              ) : null}
            </div>
          </div>
          {Array.from({ length: pageCount }, (_, index) => (
            <div key={`${src}-page-${index + 1}`} className="mx-auto w-max overflow-hidden rounded-[16px] bg-white shadow-[0_14px_32px_rgba(0,0,0,0.08)]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <canvas
                ref={(element) => {
                  canvasRefs.current[index] = element
                }}
                className="block h-auto max-w-none bg-white"
                aria-label={`${title} page ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
