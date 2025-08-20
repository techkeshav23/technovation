import React from "react"

function Textarea({ 
  className = "", 
  placeholder = "",
  value,
  onChange,
  rows = 4,
  disabled = false,
  ...props 
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disabled}
      className={`
        w-full px-3 py-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        disabled:bg-gray-100 disabled:cursor-not-allowed
        resize-vertical
        ${className}
      `}
      {...props}
    />
  )
}

export { Textarea }

