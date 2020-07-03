import React, { FC, useState } from 'react';
import {
  message,
  Input,
  Space,
  Button,
  Card,
  Tag,
  Divider,
  Pagination,
  Radio,
  Table,
  Row,
  Col,
} from 'antd';
import Icon from '@ant-design/icons';
import Header from 'src/components/MyHeader';
import Footer from 'src/components/MyFooter';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search-icon.svg';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';
import { ReactComponent as PaginationRightIcon } from 'src/assets/icons/pagination-right.svg';
import { ReactComponent as PaginationLeftIcon } from 'src/assets/icons/pagination-left.svg';
import { ReactComponent as PaginationFirstIcon } from 'src/assets/icons/pagination-first.svg';
import { ReactComponent as PaginationLastIcon } from 'src/assets/icons/pagination-last.svg';
import { ReactComponent as FilterIcon } from 'src/assets/icons/filter-icon.svg';

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

const filters = [
  { label: '고객명', value: 'customerName' },
  { label: '보낸일자', value: 'sendDate' },
  { label: '신청일자', value: 'applyDate' },
];
function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

const ProductDetailScreen: FC = (props: any) => {
  const [current, setCurrent] = useState(1);
  const total = 1500;
  const pageSize = 5;
  const [filter, setFilter] = useState('none');
  const history = useHistory();

  return (
    <div className='f-fd-c f-jc-sb hp100'>
      <Header title='상품 상세보기'></Header>
      <div className='ph16 pt24'>
        <Card
          className='ant-card-no-padding'
          hoverable
          onClick={() =>
            message.info('product card on click: to be implemented')
          }
        >
          <div className='p16'>
            <div className='f-jc-sb'>
              <Space size={8}>
                {item.tags.map((tag: any) => (
                  <div className='fls70'>{tag}</div>
                ))}
              </Space>
            </div>
            <div className='fs12 fc-gf mb10'>{item.title}</div>

            <Row justify='space-between'>
              <Col>
                <Tag color={darkSkyBlue} className='fc-w'>
                  {item.type}
                </Tag>
              </Col>
              <Col className='fwb'>{item.price.toLocaleString('ko-Kr')}원</Col>
            </Row>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailScreen;
