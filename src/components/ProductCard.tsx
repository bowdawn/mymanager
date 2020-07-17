import React, { FC, useState } from 'react';
import { message, Space, Row, Col, Card, Tag, Collapse, Table } from 'antd';
import Icon, { CaretDownOutlined } from '@ant-design/icons';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';
import { useHistory } from 'react-router-dom';
import { ProductCardType } from 'src/assets/@types/productCardType';
import {
  companies,
  productTypes,
  expirationOptions,
  planTypes,
} from 'src/assets/constants';

const { Panel } = Collapse;

interface Props {
  className?: string;
  deleteCard?: () => void;
  productCard: ProductCardType;
  key: number | string;
  active: boolean;
}

const getIfExist = (
  value: string,
  list: Array<any>,
  property: string,
  tag: string
) => {
  const item = list.find((item) => value === item.value);
  if (item && item[property]) {
    return tag + item[property];
  } else {
    return null;
  }
};

const ProductCard: FC<Props> = ({
  className,
  productCard,
  key,
  active,
  deleteCard = () => {},
}) => {
  const history = useHistory();
  const [collapsedKey, setCollapsedKey] = useState('0');

  return (
    <Card
      className={`ant-card-no-padding ${className}`}
      key={`productcard-${key}`}
      {...(active ? { hoverable: true } : {})}
      onClick={() => {
        if (active) {
          history.push(screenPath5, { item: productCard });
        }
      }}
    >
      <div className='p16'>
        <div className='f-jc-sb'>
          <Space size={8}>
            <div>
              {getIfExist(
                productCard.Expiration,
                expirationOptions,
                'label',
                '#'
              )}
              {getIfExist(
                productCard.Expiration,
                expirationOptions,
                'expiry',
                ''
              )}
            </div>
            <div>{getIfExist(productCard.Plan, planTypes, 'label', '#')}</div>
            <div>
              {getIfExist(productCard.Product, productTypes, 'label', '#')}
            </div>
          </Space>

          {active ? (
            <Icon
              className='fs24'
              onClick={(e) => {
                e.stopPropagation();
                deleteCard();
              }}
              component={DeleteIcon}
            />
          ) : null}
        </div>

        <div className='fs12 fc-gf mb10'>{productCard.Name}</div>

        <Row justify='space-between'>
          <Col>
            <Tag color={darkSkyBlue} className='fc-w ph11'>
              {companies.some(
                (company) => productCard.Company === company.value
              )
                ? companies.find(
                    (company) => productCard.Company === company.value
                  )?.label
                : null}
            </Tag>
          </Col>
          <Col className='fwb'>
            {productCard.Amount?.toLocaleString('ko-Kr')}원
          </Col>
        </Row>
      </div>
      {(active
        ? [
            <Collapse activeKey={[collapsedKey]}>
              <Panel showArrow={false} header={null} key='1'>
                <Table
                  className='clean-style-table product-card-table'
                  dataSource={productCard.Premium}
                  pagination={false}
                >
                  <Table.Column
                    align='center'
                    title={<div className='fc-pc fwb fs12 fls60'>나이</div>}
                    dataIndex='Age'
                    key='Age'
                    render={(value) => (
                      <div className='fs14 fls70 f-ai-c f-jc-c'>
                        <div className='h4 w4 bc-pg br2 mr6' /> {value}세
                      </div>
                    )}
                  ></Table.Column>
                  <Table.Column
                    align='center'
                    title={<div className='fc-pc fwb fs12 fls60'>월보험료</div>}
                    render={(value) => (
                      <div className='fs14 fwb'>
                        {value?.toLocaleString('ko-Kr')}원
                      </div>
                    )}
                    dataIndex='Amount'
                    key='Amount'
                  ></Table.Column>
                  <Table.Column
                    align='center'
                    title={
                      <div className='fc-pc fwb fs10 fls102'>
                        현재 나이 대비 <br /> 더 납입할 보험료 총계원
                      </div>
                    }
                    render={(value) => (
                      <div className='fs14 fw300'>
                        (+{value?.toLocaleString('ko-Kr')}원)
                      </div>
                    )}
                    dataIndex='Difference'
                    key='Difference'
                  ></Table.Column>
                </Table>
              </Panel>
            </Collapse>,

            <div
              className='f-jc-c f-ai-c pv8 lighten-svg-hover  lighten-svg-text-hover '
              onClick={(e) => {
                e.stopPropagation();
                setCollapsedKey(collapsedKey === '1' ? '0' : '1');
              }}
            >
              <div className='mr4'>연령별 설계</div>
              <CaretDownOutlined
                className='ml4 fs7'
                rotate={collapsedKey === '1' ? 360 : 0}
              />
            </div>,
          ]
        : []
      ).map((item: any) => item)}
    </Card>
  );
};
export default ProductCard;
