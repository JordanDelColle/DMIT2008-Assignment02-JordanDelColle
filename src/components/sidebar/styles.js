import styled from 'styled-components';

const AppBarStyles = styled.nav`
border: 2px solid black;
border-top: 0;
height: 94vh;
width: 20vw;
background-color: #F47373;
`;

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

const MyLink =styled.a`
color: white;
font-size: 0.75em;
text-transform: uppercase;
font-family: Verdana, Geneva, Tahoma, sans-serif;

.myAppBarItem:hover {
    background-color: #076AE1;
    color: black;
}
`

const SignOutText =styled.a`
color: #076AE1;
margin-left: 1vw;
font-size: 0.6em;
text-transform: lowercase;
`

export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems, MyLink, SignOutText} 