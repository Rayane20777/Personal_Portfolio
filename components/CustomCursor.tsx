'use client'

import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseenter', onMouseEnter)
      document.addEventListener('mouseleave', onMouseLeave)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget.closest('aside')) {
        setHidden(true)
      }
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onLinkHoverStart = () => {
      setLinkHovered(true)
    }

    const onLinkHoverEnd = () => {
      setLinkHovered(false)
    }

    const addLinkEvents = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onLinkHoverStart)
        el.addEventListener('mouseleave', onLinkHoverEnd)
      })
    }

    const removeLinkEvents = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onLinkHoverStart)
        el.removeEventListener('mouseleave', onLinkHoverEnd)
      })
    }

    addEventListeners()
    addLinkEvents()

    return () => {
      removeEventListeners()
      removeLinkEvents()
    }
  }, [])

  const cursorClasses = `
    fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
  `

  const ringClasses = `
    fixed pointer-events-none z-[9998] rounded-full transition-transform duration-300 ease-out
    border border-emerald-400
    ${linkHovered ? 'scale-150 opacity-50' : 'scale-100 opacity-100'}
  `

  return (
      <>
        <div
            className={cursorClasses}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: '8px',
              height: '8px',
              backgroundColor: '#4ade80',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
        />
        <div
            className={ringClasses}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: '40px',
              height: '40px',
              transform: 'translate(-50%, -50%)',
            }}
        />
      </>
  )
}

export default CustomCursor

