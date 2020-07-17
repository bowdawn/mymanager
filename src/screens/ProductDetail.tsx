import React, { FC } from 'react';
import Header from 'src/components/MyHeader';
import ProductCard from 'src/components/ProductCard';
import Footer from 'src/components/MyFooter';
import { ProductTable } from 'src/components/ProductDetail/index';

const item = {
  Name: '무)간편건강보험과건강하게사는이야기(20.4)',
  tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
  Company: '삼성화재',
  Amount: 82000,
  Premium: [
    { Age: 51, Amount: 87000, Difference: 2145000 },
    { Age: 56, Amount: 92000, Difference: 3145000 },
    { Age: 61, Amount: 97000, Difference: 4145000 },
  ],
};

const ProductDetailScreen: FC = (props: any) => {
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
