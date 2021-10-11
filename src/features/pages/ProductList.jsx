import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import ProductService from '../../services/ProductService'

function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts()
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {

            })
    })
    return (
        <Table stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Ürün adı</Table.HeaderCell>
                    <Table.HeaderCell>Ürün fiyatı</Table.HeaderCell>
                    <Table.HeaderCell>Stok adedi</Table.HeaderCell>
                    <Table.HeaderCell>Açıklama</Table.HeaderCell>
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
                        </Table.Row>
                    ))
                }

            </Table.Body>
        </Table>
    )
}
export default ProductList