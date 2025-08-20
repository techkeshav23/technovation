import React from "react"

function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({ children, className = "", ...props }) {
  return (
    <div
      className={`mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function CardTitle({ children, className = "", ...props }) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
}

function CardDescription({ children, className = "", ...props }) {
  return (
    <p
      className={`text-sm text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}

function CardContent({ children, className = "", ...props }) {
  return (
    <div
      className={`${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function CardFooter({ children, className = "", ...props }) {
  return (
    <div
      className={`flex items-center mt-4 pt-4 border-t border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}

