import React from 'react'
import {ErrorMessage,FastField} from 'formik'
import FormikError from './FormikError'

const TextArea = ({name,label,className,placeholder}) => {
  return (
    <div className={`col-12 ${className}`}>
        <div className="input-group mb-3 dir_ltr">
            <FastField as="textarea" className="form-control" name={name} placeholder={placeholder}/>
            <span className='input-group-text w_6rem justify-content-center'>{label}</span>
        </div>
        <ErrorMessage name={name} component={FormikError}/>
    </div>
  )
}

export default TextArea