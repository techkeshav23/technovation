import React from "react"

function Avatar({
  children,
  className = "",
  size = "default",
  ...props
}) {
  const sizeClasses = {
    sm: "w-6 h-6",
    default: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }

  return (
    <div
      className={`relative flex shrink-0 overflow-hidden rounded-full ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function AvatarImage({
  src,
  alt = "",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  )
}

function AvatarFallback({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`flex w-full h-full items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback }

