import React, { FC, useState } from 'react';
import { Row, Col, Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { pricePlans } from 'src/assets/constants/index';

const { CheckableTag } = Tag;

const PricePlanChoice: FC = (props: any) => {
  const [selectedPricePlans, setSelectedPricePlans] = useState([
    ...pricePlans.map((item: any) => false),
  ]);
  return (
    <Row gutter={[7, 7]}>
      {pricePlans.map((item: any, i: number) => (
        <Col span={12}>
          <CheckableTag
            checked={selectedPricePlans[i]}
            className={
              item.disabled
                ? 'h92 wp100 br4 pv15 ant-tag-checkable-disabled'
                : selectedPricePlans[i]
                ? 'h92 wp100 br4 fill-primary-hover fill-primary pv15'
                : 'h92 wp100 br4 fill-primary-hover  pv15'
            }
            onChange={(e) => {
              selectedPricePlans[i] = e;
              setSelectedPricePlans([...selectedPricePlans]);
            }}
          >
            <div className='f-fd-c f-jc-sb f-ai-c '>
              {selectedPricePlans[i] ? (
                <div className='rel '>
                  <div className='abs f l-39'>
                    <CheckboxIcon className='h11 w11' />
                  </div>
                </div>
              ) : null}
              {item.icon}
              <div
                className={
                  selectedPricePlans[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                }
              >
                {item.label}
              </div>
            </div>
          </CheckableTag>
        </Col>
      ))}
    </Row>
  );
};
export default PricePlanChoice;
