import React from "react"

function Alert({ 
  children, 
  variant = "default", 
  className = "", 
  ...props 
}) {
  let alertClasses = "relative w-full rounded-lg border p-4 "
  
  if (variant === "default") {
    alertClasses += "bg-blue-50 border-blue-200 text-blue-800 "
  } else if (variant === "destructive") {
    alertClasses += "bg-red-50 border-red-200 text-red-800 "
  } else if (variant === "warning") {
    alertClasses += "bg-yellow-50 border-yellow-200 text-yellow-800 "
  } else if (variant === "success") {
    alertClasses += "bg-green-50 border-green-200 text-green-800 "
  }

  return (
    <div
      role="alert"
      className={alertClasses + className}
      {...props}
    >
      {children}
    </div>
  )
}

function AlertTitle({ children, className = "", ...props }) {
  return (
    <h5
      className={`font-medium mb-1 ${className}`}
      {...props}
    >
      {children}
    </h5>
  )
}

function AlertDescription({ children, className = "", ...props }) {
  return (
    <div
      className={`text-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export { Alert, AlertTitle, AlertDescription }

