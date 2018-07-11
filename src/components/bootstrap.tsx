import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

export interface InputField extends WrappedFieldProps{}

export function Input(field: InputField){
    const {invalid, touched, error} = field.meta;
    const className = `form-control ${touched && invalid? 'invalid': ''}`;
    return(
        <div className="form-group">
            <label>{field.label}</label>
            <input type="text" className={className} {...field.input}/>
            {invalid && touched? <p className="alert alert-danger">{error}</p>: ''}
        </div>
    )
}

export function Textarea(field: InputField){
    const {invalid, touched, error} = field.meta;
    const className = `form-control ${touched && invalid? 'invalid': ''}`;
    return(
        <div className="form-group">
            <label>{field.label}</label>
            <textarea className={className} {...field.input}></textarea>
            {invalid && touched? <p className="alert alert-danger">{error}</p>: ''}
        </div>
    )
}