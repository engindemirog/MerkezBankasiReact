import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function TcmbTextInput({...props}) {

    const [field,meta] = useField(props)
    return (
        <FormField>
            <input {...field} {...props}/>
            {
                meta.touched && meta.error?(
                    <Label pointing basic color="red" content={meta.error}></Label>
                ):null
            }
        </FormField>
    )
}


