import React from "react"

function Label({
  children,
  htmlFor,
  className = "",
  ...props
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

export { Label }

