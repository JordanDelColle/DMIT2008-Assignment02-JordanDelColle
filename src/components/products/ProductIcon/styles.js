import styled from 'styled-components';

const ProductIconStyles  = styled.div`
      width: 15vw;
      height: 65vh;
      border: 1px black solid;
      padding: 0 1vw;
      
      h3 {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          text-align: right;
          font-size: 1.5rem;
          color: white;
          font-weight: bold;
          padding: 0.5rem 0;
      }
      h2 {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 1rem;
          color: white;
          text-transform: uppercase;
          padding: 0.5rem 0;
      }
      h4 {
          font-size: 0.5rem;
          color: white;
          padding-bottom: 0.5rem;
          text-transform: uppercase;
      }
      p {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 0.75rem;
          color: white;
          text-transform: lowercase;
          font-style: italic;
      }
`;

const ProductIconStylesEmpty  = styled.div`
      width: 15vw;
      height: 50vh;
      padding: 0 1vw;
`

const IconDiv  = styled.div`
    color: #F47373;
    padding-left: 0.5rem;
`

const Icons = styled.div`
    display: flex;
    justify-content: end;
    align-content: flex-end;
    flex-wrap: wrap-reverse;
`

export {ProductIconStyles, ProductIconStylesEmpty, IconDiv, Icons}