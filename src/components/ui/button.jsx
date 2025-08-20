import React from "react"

function Button({ 
  children, 
  onClick, 
  className = "", 
  variant = "default", 
  size = "default",
  disabled = false,
  type = "button",
  ...props 
}) {
  // Simple base styles
  let baseClasses = "px-4 py-2 rounded font-medium transition-colors duration-200 "
  
  // Simple variant styles
  if (variant === "default") {
    baseClasses += "bg-blue-600 text-white hover:bg-blue-700 "
  } else if (variant === "destructive") {
    baseClasses += "bg-red-600 text-white hover:bg-red-700 "
  } else if (variant === "outline") {
    baseClasses += "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 "
  } else if (variant === "secondary") {
    baseClasses += "bg-gray-200 text-gray-900 hover:bg-gray-300 "
  } else if (variant === "ghost") {
    baseClasses += "text-gray-700 hover:bg-gray-100 "
  }
  
  // Simple size styles
  if (size === "sm") {
    baseClasses += "px-3 py-1 text-sm "
  } else if (size === "lg") {
    baseClasses += "px-6 py-3 text-lg "
  }
  
  // Disabled styles
  if (disabled) {
    baseClasses += "opacity-50 cursor-not-allowed "
  }

  return (
    <button
      type={type}
      className={baseClasses + className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }

