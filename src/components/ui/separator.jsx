import React from "react"

function Separator({
  className = "",
  orientation = "horizontal",
  ...props
}) {
  const separatorClasses = orientation === "horizontal" 
    ? "w-full h-px bg-gray-200" 
    : "h-full w-px bg-gray-200"

  return (
    <div
      className={`${separatorClasses} ${className}`}
      {...props}
    />
  )
}

export { Separator }

