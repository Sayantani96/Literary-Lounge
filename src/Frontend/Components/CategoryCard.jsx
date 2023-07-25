import React from 'react'
import './Featured.css'
const CategoryCard = ({children}) => {
  return (
    <div className="card-display">
        {children}
    </div>
  )
}

export default CategoryCard