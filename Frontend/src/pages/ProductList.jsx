import React from 'react'
import styled from "styled-components";
import Announcement from '../Components/Announcement'
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

const Container = styled.div``;


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Product Type
            </Option>
            <Option>Cakes</Option>
            <Option>Cards</Option>
            <Option>Decorations</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>1/2kg</Option>
            <Option>1kg</Option>
            <Option>2kg</Option>
            <Option>5kg</Option>
            <Option>10kg</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;