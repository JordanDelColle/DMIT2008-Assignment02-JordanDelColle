import styled from 'styled-components';

const ProductPreviewStyles  = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
text-transform: lowercase;
`;

const ProductName = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: -0.5px;
    color: white;
    word-wrap: break-word;
    hyphens: auto;
    max-width: 15vw;
`;

const ProductPrice = styled.p`
    font-size: 2.25rem;
    font-weight: 100;
    letter-spacing: -1px;
    color: white;
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
`;

const ProductFormat = styled.p`
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: -1px;
    color: white;
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
`;

const ProductDescription = styled.p`
    font-size: 1rem;
    color: white;
    word-wrap: break-word;
    max-width: 15vw;
    font-style: italic;
    hyphens: auto;
`;

const ProductImage = styled.div`
    margin: 1rem auto 0;
    width: 300px;
    img {
        width: 100%;
        height: auto;
    }
`;

export {ProductPreviewStyles, ProductName, ProductPrice, ProductDescription, ProductImage, ProductFormat};