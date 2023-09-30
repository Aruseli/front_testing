import * as React from "react"

export function Arrow({
  fill = "#fff", 
  width = 22,
  height = 8,
  ...props
}:{
  fill?: string; 
  width?: number;
  height?: number;
  [key:string]: any
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3.5a.5.5 0 000 1v-1zm20.354.854a.5.5 0 000-.708L18.172.464a.5.5 0 10-.707.708L20.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM1 4.5h20v-1H1v1z"
        fill={fill}
      />
    </svg>
  )
}