import React,{useState} from 'react'
import { Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    function handleSignOut() {
        setIsAuthenticated(false)
    }
    return (
        <div>
            <Menu>
                <Menu.Item>Anasayfa</Menu.Item>
                <Menu.Item>Ürünler</Menu.Item>
                <CartSummary/>
                <Menu.Menu position="right">
                    {isAuthenticated?<SignedIn signOut={handleSignOut}/>: <SignedOut bisey="10" signIn={handleSignIn}/>}
                </Menu.Menu>               
            </Menu>
        </div>
    )
}
