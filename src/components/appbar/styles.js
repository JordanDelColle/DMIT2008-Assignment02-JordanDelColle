import styled from 'styled-components';

const AppBarStyles = styled.nav`
border: 2px solid black;
padding: 0 1rem 2.5rem 1rem;
height: 6vh;
background-color: black;
color: white;
`;

const AppBarItems = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`

const AppBarItem = styled.li`
`

const AppBarItemGroup = styled.li`
`

export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems} 