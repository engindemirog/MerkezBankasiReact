import React from 'react'
import { Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg"/>
            <Dropdown text="Hoşgeldin Engin">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim"></Dropdown.Item>
                    <Dropdown.Item onClick={signOut} text="Çıkış yap"></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
