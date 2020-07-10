import React, { FC, useState } from 'react';
import { message, Space, Row, Col, Card, Tag, Collapse, Table } from 'antd';
import Icon, { CaretDownOutlined } from '@ant-design/icons';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';
import { useHistory } from 'react-router-dom';
import { productCardType } from 'src/assets/@types/productCardType';

const { Panel } = Collapse;

interface Props {
  className?: string;
  deleteCard?: () => void;
  productCard: productCardType;
  key: number | string;
  active: boolean;
}
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
          history.push(screenPath5);
        }
      }}
    >
      <div className='p16'>
        <div className='f-jc-sb'>
          <Space size={8}>
            {productCard.tags.map((tag: any, j: number) => (
              <div className='fls70' key={`tag${key}-${j}`}>
                {tag}
              </div>
            ))}
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

        <div className='fs12 fc-gf mb10'>{productCard.title}</div>

        <Row justify='space-between'>
          <Col>
            <Tag color={darkSkyBlue} className='fc-w ph11'>
              {productCard.type}
            </Tag>
          </Col>
          <Col className='fwb'>
            {productCard.price.toLocaleString('ko-Kr')}원
          </Col>
        </Row>
      </div>
      {(active
        ? [
            <Collapse activeKey={[collapsedKey]}>
              <Panel showArrow={false} header={null} key='1'>
                <Table
                  className='clean-style-table product-card-table'
                  dataSource={productCard.ageGroupPlan}
                  pagination={false}
                >
                  <Table.Column
                    align='center'
                    title={<div className='fc-pc fwb fs12 fls60'>나이</div>}
                    dataIndex='age'
                    key='age'
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
                        {value.toLocaleString('ko-Kr')}원
                      </div>
                    )}
                    dataIndex='price'
                    key='price'
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
                        (+{value.toLocaleString('ko-Kr')}원)
                      </div>
                    )}
                    dataIndex='premium'
                    key='premium'
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
