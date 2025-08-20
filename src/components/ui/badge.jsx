import React from "react"

function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  let badgeClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium "
  
  if (variant === "default") {
    badgeClasses += "bg-blue-100 text-blue-800 "
  } else if (variant === "secondary") {
    badgeClasses += "bg-gray-100 text-gray-800 "
  } else if (variant === "destructive") {
    badgeClasses += "bg-red-100 text-red-800 "
  } else if (variant === "outline") {
    badgeClasses += "border border-gray-300 text-gray-700 "
  }

  return (
    <span
      className={badgeClasses + className}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }

