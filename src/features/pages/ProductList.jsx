import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import { Button, Table } from 'semantic-ui-react'
import ProductService from '../../services/ProductService'

function ProductList() {
    const [products, setProducts] = useState([])
    let { categoryId } = useParams()


    useEffect(() => {
        let productService = new ProductService();
        if(categoryId){
            productService.getProductsByCategory(categoryId)
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {

            })
        }else{
            productService.getProducts()
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {

            })
        }
    }, [categoryId])

    function handleAddToCart(product) {
        console.log(product)
        toast.success("Sepete eklendi : " + product.name)
    }
    return (
        <Table stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Ürün adı</Table.HeaderCell>
                    <Table.HeaderCell>Ürün fiyatı</Table.HeaderCell>
                    <Table.HeaderCell>Stok adedi</Table.HeaderCell>
                    <Table.HeaderCell>Açıklama</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    products.map(product => (
                        <Table.Row key={product.id}>
                            <Table.Cell>{product.id}</Table.Cell>
                            <Table.Cell>{product.name}</Table.Cell>
                            <Table.Cell>{product.unitPrice}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                            <Table.Cell>
                                <Button primary onClick={()=>handleAddToCart(product)}>Sepete ekle</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }

            </Table.Body>
        </Table>
    )
}
export default ProductList