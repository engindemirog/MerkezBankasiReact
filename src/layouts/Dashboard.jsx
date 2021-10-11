import React from 'react'
import { Route, Switch } from 'react-router'
import { Grid } from 'semantic-ui-react'
import CategoryList from '../features/pages/CategoryList'
import ProductList from '../features/pages/ProductList'
import CartDetail from '../features/pages/CartDetail'
import Navi from './Navi'
import NotFound from '../features/pages/NotFound'
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
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
                        <Switch>
                            <Route exact path="/" component={ProductList}/>
                            <Route exact path="/products" component={ProductList}/>
                            <Route exact path="/products/category/:categoryId" component={ProductList}/>
                            <Route path="/cart" component={CartDetail}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
