import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import TcmbTextInput from '../../utilities/customFormControls/TcmbTextInput'

export default function ProductAdd() {

    const initialValues = {name:"", unitPrice:10, unitsInStock:1, categoryId:1}

    const schema = Yup.object({
        name:Yup.string().required("Ürün adı zorunludur."),
        unitPrice:Yup.number().required("Fiyat zounludur").min(5,"Fiyat minimum 5 olmalıdır"),
        unitsInStock:Yup.number().required("Stok adedi zorunludur.").positive().integer(),
        categoryId:Yup.number().required("Kategori zorunludur.").integer().positive()
    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{
                console.log(values);
            }}>
                <Form className="ui form">
                    <TcmbTextInput name="name" placeholder="Ürün adı"/>
                    <TcmbTextInput name="unitPrice" placeholder="Birim fiyatı"/>
                    <TcmbTextInput name="unitsInStock" placeholder="Stok adedi"/>
                    <TcmbTextInput name="categoryId" placeholder="Kategori"/>
                    <Button color="green" content="Ekle" type="submit"/>
                </Form>
            </Formik>
        </div>
    )
}
