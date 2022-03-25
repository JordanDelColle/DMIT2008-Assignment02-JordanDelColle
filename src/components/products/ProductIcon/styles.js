import styled from 'styled-components';



const ProductIconStyles  = styled.div`
      width: 15vw;
      height: 60vh;
      border: 1px black solid;
      padding: 0 1vw;
      /* padding-bottom: 10vh; */
      
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
          /* font-weight: bold; */
          padding: 0.5rem 0;
      }
      h4 {
          font-size: 0.5rem;
          color: white;
          padding-bottom: 0.5rem;

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


export {ProductIconStyles, ProductIconStylesEmpty}