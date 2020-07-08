import React, { FC } from 'react';
import { Tag } from 'antd';

import Header from 'src/components/MyHeader';
import ProductCard from 'src/components/ProductCard';
import Footer from 'src/components/MyFooter';
import { ProductTable } from 'src/screens/ProductDetailScreen/components/index';

const item = {
  title: '무)간편건강보험과건강하게사는이야기(20.4)',
  tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
  type: '삼성화재',
  price: 82000,
  ageGroupPlan: [
    { age: 51, price: 87000, premium: 2145000 },
    { age: 56, price: 92000, premium: 3145000 },
    { age: 61, price: 97000, premium: 4145000 },
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
