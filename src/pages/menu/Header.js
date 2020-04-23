import React, { Component } from 'react'
import { 
    HeaderWrapper 
    ,Logo
    ,Nav
    ,NavItem
    ,NavViewPath
} from './style.js'
import { IconGlobal 
} from '../../statics/iconfont/iconfont'

 class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <IconGlobal/>
                <Logo className="iconfont" style ={{ fontSize:"40px" }}>&#xe62d;</Logo>
                <Nav>
                     <NavItem>Advanced Alarm Manager R5</NavItem>
                     <NavViewPath> current path :  </NavViewPath>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;