import styled from 'styled-components';

export const MenuWrapper = styled.div`
   width: 960px;
   margin: 0 auto;
   height: 300px;
   background: red;
`;

export const HeaderWrapper =styled.div`
   position: relative;
    height: 80px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo =styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: block;
   width: 256px;
   height: 100%;
   border-right: 1px solid #f0f0f0;
   z-index:99999;
`;

export const Nav =styled.div`
    position: absolute;
    width: 854px;
    height: 100%;
    margin-left: 256px;
    border-right: 1px solid #f0f0f0;
`;

export const NavItem =styled.div`
     &.left{
        float : left ;
     }
     &.right{
        float: right;
     }
     text-align:center;
     line-height:80px;
     font-size:30px;
`;

export const NavViewPath =styled.div`
    height: 15px;
    font-size:12px;
    background: #f0f0f0;
`;