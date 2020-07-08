import React, { FC, useState } from 'react';
import { Input, Tag, Table } from 'antd';

import Header from 'src/components/MyHeader';
import ProductCard from 'src/components/ProductCard';
import Footer from 'src/components/MyFooter';
import { useHistory } from 'react-router-dom';

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

const data = [
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '뇌혈관진단비', subscriptionFee: 1000, insuranceCost: 1090 },
  { feeName: '심혈관진단비', subscriptionFee: 1000, insuranceCost: 2990 },
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 1090 },
  { feeName: '뇌혈관진단비', subscriptionFee: 1000, insuranceCost: 2090 },
  { feeName: '심혈관진단비', subscriptionFee: 1000, insuranceCost: 1090 },
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '뇌혈관진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '심혈관진단비', subscriptionFee: 1000, insuranceCost: 590 },
  { feeName: '일반암진단비', subscriptionFee: 1000, insuranceCost: 590 },
];

const ProductDetailScreen: FC = (props: any) => {
  const history = useHistory();

  return (
    <div className='f-fd-c f-jc-sb hp100'>
      <Header title='상품 상세보기'></Header>
      <ProductCard
        className='mv24 mh16'
        productCard={item}
        key={'detail'}
        active={false}
      />

      <div className='wp100 ph32 pv16 bc-wt h126 f-fd-c f-jc-sb'>
        <div className='fs16 fls8 fc-pc fwb'>행복을 다주는 건강보험</div>
        <div className='f-jc-sb f-ai-fe'>
          <Tag color={darkSkyBlue} className='ph11 h28 fs14 f-ai-c'>
            {item.type}
          </Tag>
          <div>
            <div className='fls7 fs14 ta-e'>장기종합 / 100세 만기</div>
            <div className='fls7 fs14'>
              종합 고급형 <span className='fs16 fwb'>82,000원</span>
            </div>
          </div>
        </div>
      </div>
      <Table
        className='custom-ant-table mb50'
        dataSource={data}
        pagination={false}
      >
        <Table.Column
          align='left'
          className='pl32'
          title={<div className='fc-pc fwb fls7'>담보명</div>}
          dataIndex='feeName'
          key='feeName'
        />
        <Table.Column
          align='center'
          title={<div className='fc-pc fwb fls7'>가입금액</div>}
          dataIndex='subscriptionFee'
          key='feeName'
          render={(value) => (
            <Input className='w80 h24 ta-c' placeholder={value} />
          )}
        />
        <Table.Column
          align='right'
          className='pr32'
          title={<div className='fc-pc fwb fls7'>보험료</div>}
          dataIndex='insuranceCost'
          key='feeName'
          render={(value) => <div>{value.toLocaleString('ko-Kr')}원</div>}
        />
      </Table>
      <Footer />
    </div>
  );
};

export default ProductDetailScreen;
