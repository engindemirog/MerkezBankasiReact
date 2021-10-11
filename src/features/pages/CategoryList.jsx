import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'

export default function CategoryList() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService();
        categoryService.getCategories()
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {

            })
    }, [])

    return (
        <div>
            <Menu vertical>
                {
                    categories.map(category => (
                        <Menu.Item key={category.id}>
                            <Link to={"/products/category/"+category.id}>
                                {category.name}
                            </Link>
                        </Menu.Item>
                    ))
                }

            </Menu>
        </div>
    )
}