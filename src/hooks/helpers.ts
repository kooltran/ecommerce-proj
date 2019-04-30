import { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const usePrevious = (value: any) => {
  const ref = useRef(null)
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

export const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [bounds, set] = useState<any>({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}
