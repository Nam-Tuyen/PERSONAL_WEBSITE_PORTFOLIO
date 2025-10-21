"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const particlesRef = useRef<THREE.Points>()
  const animationIdRef = useRef<number>()

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    sceneRef.current = scene
    rendererRef.current = renderer

    // Create particles
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const colors = []
    
    for (let i = 0; i < 1000; i++) {
      vertices.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
      )
      
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.5)
      colors.push(color.r, color.g, color.b)
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    
    const material = new THREE.PointsMaterial({ 
      size: 3, 
      vertexColors: true, 
      transparent: true, 
      opacity: 0.8 
    })
    
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles
    
    camera.position.z = 500

    // Animation loop
    const animate = () => {
      if (!particlesRef.current || !rendererRef.current || !sceneRef.current) return
      
      particlesRef.current.rotation.x += 0.0003
      particlesRef.current.rotation.y += 0.0005
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.1
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      
      rendererRef.current.render(sceneRef.current, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }
    
    animate()

    // Handle resize
    const handleResize = () => {
      if (!camera || !rendererRef.current) return
      
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ background: 'transparent' }}
    />
  )
}
