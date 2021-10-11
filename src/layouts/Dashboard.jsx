import React from 'react'
import { Grid } from 'semantic-ui-react'
import CategoryList from '../features/pages/CategoryList'
import ProductList from '../features/pages/ProductList'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Navi/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <CategoryList/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <ProductList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
