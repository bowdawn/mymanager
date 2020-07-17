import React, { FC } from 'react';
import Header from 'src/components/MyHeader';
import ProductCard from 'src/components/ProductCard';
import Footer from 'src/components/MyFooter';
import { ProductTable } from 'src/components/ProductDetail/index';
import { RouteComponentProps } from 'react-router';
import { ProductCardType } from 'src/assets/@types/productCardType';

interface Props extends RouteComponentProps {
  item: ProductCardType;
}

const ProductDetailScreen: FC<Props> = ({ item }) => {
  return (
    <div className='f-fd-c f-jc-sb hp100'>
      <Header title='상품 상세보기'></Header>
      <ProductCard
        className='mv24 mh16'
        productCard={item}
        key={'detail'}
        active={false}
      />
      <ProductTable item={item} />
      <Footer />
    </div>
  );
};

export default ProductDetailScreen;
