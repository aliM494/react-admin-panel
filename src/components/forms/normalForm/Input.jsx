import React from 'react'
import {ErrorMessage,FastField} from 'formik'
import FormikError from './FormikError'

const Input = ({type,name,label,className,placeholder}) => {
  return (
    <div className={`col-12 ${className}`}>
        <div className="input-group mb-3 dir_ltr">
            <FastField type={type} name={name} label={label} className="form-control" placeholder={placeholder}/>
            <span className='input-group-text w_6rem justify-content-center'>{label}</span>
        </div>
        <ErrorMessage name={name} component={FormikError}/>
    </div>
  )
}

export default Input