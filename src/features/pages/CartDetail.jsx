import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Table } from 'semantic-ui-react'
import { removeFromCart } from '../../store/actions/cartActions'
import { useSelector } from 'react-redux'

function CartDetail() {

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function handleRemoveFromCart(product) {
        dispatch(removeFromCart(product))
        toast.success("Sepetten silindi : " + product.name)
    }
    return (
        <div>
            {
                cartItems.length > 0 &&
                <Table stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Ürün adı</Table.HeaderCell>
                            <Table.HeaderCell>Ürün fiyatı</Table.HeaderCell>
                            <Table.HeaderCell>Stok adedi</Table.HeaderCell>
                            <Table.HeaderCell>Açıklama</Table.HeaderCell>
                            <Table.HeaderCell>Adet</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            cartItems.map(cartItem => (
                                <Table.Row key={cartItem.product.id}>
                                    <Table.Cell>{cartItem.product.id}</Table.Cell>
                                    <Table.Cell>{cartItem.product.name}</Table.Cell>
                                    <Table.Cell>{cartItem.product.unitPrice}</Table.Cell>
                                    <Table.Cell>{cartItem.product.unitsInStock}</Table.Cell>
                                    <Table.Cell>{cartItem.product.quantityPerUnit}</Table.Cell>
                                    <Table.Cell>{cartItem.quantity}</Table.Cell>
                                    <Table.Cell>
                                        <Button primary onClick={() => handleRemoveFromCart(cartItem.product)}>Sepete ekle</Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }

                    </Table.Body>
                </Table>
            }
        </div>


    )
}
export default CartDetail