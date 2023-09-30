import * as React from "react"

export function Note({
  stroke = "#fff", 
  width = 32,
  height =32,
  ...props
}:{
  stroke?: string; 
  width?: number;
  height?: number;
  [key:string]: any
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.867 24.8c1.473 0 2.666-1.135 2.666-2.536 0-1.4-1.193-2.536-2.666-2.536-1.473 0-2.667 1.136-2.667 2.536 0 1.4 1.194 2.536 2.667 2.536zM20.534 22.264c1.473 0 2.667-1.135 2.667-2.536 0-1.4-1.194-2.535-2.667-2.535-1.473 0-2.667 1.135-2.667 2.535 0 1.4 1.194 2.536 2.667 2.536z"
        stroke={stroke}
        strokeWidth={1.22951}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.533 22.264v-9.99a.258.258 0 01.041-.134.275.275 0 01.106-.095l10.133-4.818a.278.278 0 01.26.011.26.26 0 01.094.093c.022.038.033.08.033.124V19.73"
        stroke={stroke}
        strokeWidth={1.22951}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={16}
        cy={16}
        r={15.3852}
        stroke={stroke}
        strokeWidth={1.22951}
      />
    </svg>
  )
}