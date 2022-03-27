import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Name = styled.h2`
  padding-left: 20px;
  padding-top: 20px;
  font-size: 40px;
`


const Products = () => {
  return (
    <div>
      <Name>POPULAR PRODUCTS</Name>
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </div>
  );
};

export default Products;