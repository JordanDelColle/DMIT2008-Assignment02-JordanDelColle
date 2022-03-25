import styled from 'styled-components';

const ProductDataEntryFormStyles  = styled.form`
    width: 40vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    input:focus, textarea:focus {
        border-color: black;
        background-color: #eff6ff;
        outline-color: black;
    }
    fieldset {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
`;

const ProductImage = styled.div`
    text-transform: uppercase;
    label {
        color: black;
    }
`;

const ProductName = styled.div`
    flex: 3;
    text-transform: uppercase;
    label {
        color: black;
    }
`;

const ProductPrice = styled.div`
    flex: 1;
    text-transform: uppercase;
    label {
        color: black;
    }
`;

const ProductFormat = styled.div`
    flex: 1;
    text-transform: uppercase;
    label {
        color: black;
    }
`;

const ProductDescription = styled.div`
    text-transform: uppercase;
    label {
        color: black;
    }
    textarea {
        resize: none;
        font-size: 14px;
    }
`;

export {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductFormat}