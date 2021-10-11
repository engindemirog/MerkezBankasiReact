import React,{useState,useEffect} from 'react'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../../services/CategoryService'

export default function CategoryList() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService();
        categoryService.getCategories()
        .then(response=>{
            setCategories(response.data)
        })
        .catch(error=>{

        })
    })
    
    return (
        <div>
            <Menu vertical>
                {
                    categories.map(category=>(
                        <Menu.Item key={category.id}>{category.name}</Menu.Item>
                    ))
                }
                
            </Menu>
        </div>
    )
}