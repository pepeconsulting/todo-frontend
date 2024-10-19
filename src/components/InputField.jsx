import React from 'react'

export default function InputField( { placeholder= "", required, type, value, className, onChange}) {
  return (
   <>
        <input
        placeholder={placeholder}
        required={required}
        type={type}
        value={ value}
        className={className}
        onChange={onChange}
        />
        </>
   
  )
}
