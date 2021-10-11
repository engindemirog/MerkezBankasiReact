import React,{useState} from 'react'
import { Menu } from 'semantic-ui-react'
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
                <Menu.Menu position="right">
                    {isAuthenticated?<SignedIn/>: <SignedOut/>}
                </Menu.Menu>
                
            </Menu>
        </div>
    )
}
