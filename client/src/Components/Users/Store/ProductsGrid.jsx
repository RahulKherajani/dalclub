import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled('section')({
  display: 'grid',
  gap: '3em',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  margin: '5vh',
});

const ProductContainer = styled('div')({
  margin: '1vh',
  minWidth: '300px',
  height: '450px',
  backgroundColor: '#edf6ff',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
});

const Image = styled('img')({
  height: '70%',
  zIndex: 2,
  padding: '20px 0px',
});

const ProductDetails = styled('h3')({
  fontSize: '16px',
  fontWeight: 500,
});

const ProductsGrid = ({ productList }) => {
  const navigate = useNavigate();
  return (
    <Container>
      {productList.map((product) => (
        <ProductContainer
          key={product.product_id}
          onClick={() => navigate(`/store/products/${product.product_id}`)}
        >
          <Image src={product.product_color[0].product_image} />
          <Typography variant='h5' gutterBottom>
            {product.product_name}
          </Typography>
          <Typography variant='h6'>{product.product_price} CAD</Typography>
        </ProductContainer>
      ))}
    </Container>
  );
};

export default ProductsGrid;
