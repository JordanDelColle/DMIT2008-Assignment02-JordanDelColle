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

const SignInButton = styled.button`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: none;
    background-color: black;
    color: white;
    outline: none;
    padding: 0.5rem 1rem;
`;
export {Button, IconButton, SignInButton}