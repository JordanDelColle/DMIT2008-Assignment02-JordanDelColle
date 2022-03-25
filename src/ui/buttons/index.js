import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.bgcolor || "transparent"};
    border: none;
    border-radius: 3px;
    padding: 0.25rem 2rem;
    margin: 4rem;
    color: ${props => props.color || "#076AE1"};
`;

const IconButton = styled.button`
    border: none;
    background-color: transparent;
    outline: none;
`;
export {Button, IconButton}