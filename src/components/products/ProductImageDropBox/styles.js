import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
  }
  
  const ProductImageDropBoxStyles = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem;
    background-color: #eff6ff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
    outline: none;
    transition: border .24s ease-in-out;
    font-size:14px;
    margin-bottom: 1rem;
    border: 2px solid #eff6ff;
    :hover{
      border: 2px solid black;
      background-color:#F47373;
      cursor: pointer;
    }
  `;
 
export {ProductImageDropBoxStyles}