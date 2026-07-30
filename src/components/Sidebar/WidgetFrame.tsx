import type { ReactNode } from 'react'

interface WidgetFrameProps {
  children: ReactNode
  className?: string
  id?: string
}

export function WidgetFlourish() {
  return (
    <svg
      className="sidebar-widget__flourish"
      viewBox="0 0 120 24"
      fill="none"
      aria-hidden
    >
      <path d="M4 12h38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      <path d="M78 12h38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      <rect
        x="34"
        y="4"
        width="52"
        height="16"
        rx="8"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.9"
      />
      <circle cx="52" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="68" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function WidgetFrame({ children, className = '', id }: WidgetFrameProps) {
  return (
    <div id={id} className={`sidebar-widget ${className}`.trim()}>
      <span className="sidebar-widget__ornament sidebar-widget__ornament--top" aria-hidden>
        <WidgetFlourish />
      </span>
      <div className="sidebar-widget__inner">{children}</div>
      <span className="sidebar-widget__ornament sidebar-widget__ornament--heart" aria-hidden>
        ♥
      </span>
    </div>
  )
}
