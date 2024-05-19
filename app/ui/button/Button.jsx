"use client"
import React from 'react'

const Button = ({ title, color, handleClick, type="default", otherStyles="" }) => {
  if (type === "default") {
    return (
      <button 
        className={`focus:outline-none text-white bg-${color}-500 hover:bg-${color}-900 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800
        ${otherStyles}`}
        onClick={handleClick}
      >
        {title}
      </button>  
    )
  } else if (type === "outlined") {
    return (
      <button
        type="button" 
        className={`text-${color}-700 hover:text-white border border-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-${color}-500 dark:text-${color}-500 dark:hover:text-white dark:hover:bg-${color}-500 dark:focus:ring-${color}-800
        ${otherStyles}`}
        onClick={handleClick}
      >
        {title}
      </button>
    )
  }
}

export default Button