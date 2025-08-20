import React from "react"

function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  className = "",
  id,
  ...props
}) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
        focus:ring-blue-500 focus:ring-2 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
  )
}

export { Checkbox }

