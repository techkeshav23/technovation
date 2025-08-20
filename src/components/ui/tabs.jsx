import React, { useState } from "react"

function Tabs({ 
  children, 
  defaultValue, 
  value, 
  onValueChange, 
  className = "", 
  ...props 
}) {
  const [activeTab, setActiveTab] = useState(defaultValue || value)
  
  const handleTabChange = (newValue) => {
    setActiveTab(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <div className={`${className}`} {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, onTabChange: handleTabChange })
      )}
    </div>
  )
}

function TabsList({ children, className = "", activeTab, onTabChange, ...props }) {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 ${className}`}
      {...props}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, onTabChange })
      )}
    </div>
  )
}

function TabsTrigger({ 
  children, 
  value, 
  className = "", 
  activeTab, 
  onTabChange, 
  ...props 
}) {
  const isActive = activeTab === value
  
  return (
    <button
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium 
        transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
        disabled:pointer-events-none disabled:opacity-50
        ${isActive 
          ? 'bg-white text-gray-900 shadow-sm' 
          : 'text-gray-600 hover:text-gray-900'
        }
        ${className}
      `}
      onClick={() => onTabChange && onTabChange(value)}
      {...props}
    >
      {children}
    </button>
  )
}

function TabsContent({ 
  children, 
  value, 
  className = "", 
  activeTab, 
  ...props 
}) {
  if (activeTab !== value) return null
  
  return (
    <div
      className={`mt-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

