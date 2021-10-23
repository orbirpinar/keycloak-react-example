import React, { useState } from 'react'
import { useKeycloak } from '@react-keycloak/web'

import { Menu,Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
 


interface IUserInfo {
    username : string | undefined,
    email : string | undefined
}

const RightMenu = () => {



const [userInfo, setuserInfo] = useState<IUserInfo |undefined>( undefined)

const { keycloak } = useKeycloak()
keycloak.loadUserProfile().then(keycloakProfile => {
    setuserInfo({
        username :keycloakProfile.username,
        email : keycloakProfile.email
    })
});
console.log(keycloak)


    return (
        <div>
    <Menu mode="horizontal">
        <Menu.Item key="app">
          <p >{userInfo?.email  }</p>
        </Menu.Item>
        <Menu.Item key="mail">
        <Button type='text' onClick={() => keycloak.logout()}>Sign out</Button>
        </Menu.Item>
      </Menu>
        </div>
    )
}

export default RightMenu
