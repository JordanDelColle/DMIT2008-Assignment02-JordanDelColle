import styled from 'styled-components';

const SideBarStyles = styled.nav`
    border: 2px solid black;
    border-top: 0;
    width: 20vw;
    background-color: #F47373;
.sign-out-button:hover {
    background-color: #076AE1;
    color: #F47373;
}
`;

const ProductOptionsStyles = styled.div`
    height: 100%;
.protected-link {
    color: white;
    font-size: 0.75em;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
}
.app-bar-item:hover {
    background-color: #076AE1;
    color: black;
}
`

const AppBarItems = styled.ul`
    display: block;
    align-items: center;
`

const AppBarItem = styled.div`
    padding: 1rem;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #F47373;
`

const AppBarItemGroup = styled.li`
    border-bottom: 1px solid white;
`

export {SideBarStyles, ProductOptionsStyles, AppBarItem, AppBarItemGroup, AppBarItems} 