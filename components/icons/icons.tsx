import React from 'react';
import { IconContext } from "react-icons";


export function ChatIcon({
  stroke = '#060608',
  ...props
}:{
  stroke?: string;
  [key:string]: any;
}) {
  return (
    <svg
      width={11}
      height={12}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.722 7.098v-.554a1.108 1.108 0 00-1.11-1.109A1.112 1.112 0 01.5 4.326V2.11A1.108 1.108 0 011.611 1H5.5a1.112 1.112 0 011.111 1.109v1.663M5.5 5.435h3.889A1.112 1.112 0 0110.5 6.544V8.76A1.108 1.108 0 019.389 9.87h-.356a.756.756 0 00-.755.754.376.376 0 01-.451.369.378.378 0 01-.194-.103l-.696-.695a1.112 1.112 0 00-.786-.325H5.5a1.112 1.112 0 01-1.111-1.109V6.544A1.108 1.108 0 015.5 5.435z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ViewIcon({
  stroke = '#060608',
  ...props
}:{
  stroke?: string;
  [key:string]: any;
}) {
  return (
    <svg
      width={10}
      height={9}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.031 4.173a.495.495 0 010-.345C.887 1.5 2.837 0 5 0c2.163 0 4.113 1.5 4.969 3.828a.493.493 0 010 .345 6.669 6.669 0 01-.54 1.131.5.5 0 11-.858-.514A5.65 5.65 0 008.964 4C8.225 2.171 6.686 1 5 1S1.775 2.171 1.036 4A4.657 4.657 0 004.12 6.894a.5.5 0 01-.24.97A5.696 5.696 0 01.032 4.173zM7 4a2 2 0 00-2.788-1.837.75.75 0 11-1.05 1.05A2 2 0 107 4zm.75 5a.5.5 0 00.5-.5v-.75H9a.5.5 0 000-1h-.75V6a.5.5 0 10-1 0v.75H6.5a.5.5 0 000 1h.75v.75a.5.5 0 00.5.5z"
        stroke={stroke}
      />
    </svg>
  )
}

export function IconProvider({icon, color}:{icon?:any; color?: string;}) {
  return (<IconContext.Provider value={{ color: color }}>
      {icon}
    </IconContext.Provider>
  )
}