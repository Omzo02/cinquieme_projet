import React, { useState } from 'react'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <h2 onClick={() => setIsOpen(!isOpen)}>{title}</h2>
      {isOpen && <p>{content}</p>}
    </div>
  )
}

export default Collapse
