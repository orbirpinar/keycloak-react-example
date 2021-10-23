import React,{ useState } from 'react'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import {KeycloakProfile,} from 'keycloak-js'


interface ProfileType  {
  username : string | undefined,
  email : string | undefined
}

const Navbar =() => {

    const [drawer, setDrawer] = useState<boolean>(false);

    const showDrawer = () => {
        setDrawer(true);
    }

    const onClose = () => {
        setDrawer(false);
    }

    return (
        <div>
             <nav className="menuBar">
          <div className="logo">
            <a href=""><img src="https://936653.smushcdn.com/2447572/wp-content/uploads/2020/09/A%C3%A7%C4%B1k_zemin_%C3%BCzerine-1-e1601458521530.png?lossy=1&amp;strip=1&amp;webp=1" alt="" loading="lazy" height="15" />

            </a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
                <RightMenu/>
            </div>
            <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={drawer}
            >
              <LeftMenu />
              <RightMenu/>
            </Drawer></div>
        </nav>
        </div>
    )
}

export default Navbar
