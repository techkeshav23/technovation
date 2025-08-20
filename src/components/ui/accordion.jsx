import React, { useState } from "react"

// Simple Accordion component for beginners
function Accordion({ 
  children, 
  type = "single", // "single" or "multiple" 
  collapsible = false,
  className = "", 
  ...props 
}) {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { 
          accordionType: type,
          collapsible: collapsible,
          key: index 
        })
      )}
    </div>
  )
}

function AccordionItem({ 
  children, 
  value,
  accordionType,
  collapsible,
  className = "", 
  ...props 
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`border border-gray-200 rounded-lg ${className}`} {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { 
          isOpen, 
          onToggle: handleToggle,
          value 
        })
      )}
    </div>
  )
}

function AccordionTrigger({ 
  children, 
  isOpen, 
  onToggle,
  className = "", 
  ...props 
}) {
  return (
    <button
      className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors ${className}`}
      onClick={onToggle}
      {...props}
    >
      <span className="font-medium">{children}</span>
      <svg 
        className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

function AccordionContent({ 
  children, 
  isOpen,
  className = "", 
  ...props 
}) {
  if (!isOpen) return null

  return (
    <div className={`px-4 pb-3 border-t border-gray-200 ${className}`} {...props}>
      <div className="pt-3">
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
