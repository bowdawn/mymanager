import React, { FC, useState } from 'react';
import { Row, Col, Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { expirationOptions } from 'src/assets/constants/index';

const { CheckableTag } = Tag;

const ExpirationChoice: FC = (props: any) => {
  const [selectedExpirations, setSelectedExpirations] = useState([
    ...expirationOptions.map((item: any) => false),
  ]);
  return (
    <Row gutter={[7, 7]}>
      {expirationOptions.map((item: any, i: number) => (
        <Col span={8}>
          <CheckableTag
            checked={selectedExpirations[i]}
            className={`h70 wp100 br4 f-fd-c pv10 f-ai-c ${
              item.disabled
                ? 'ant-tag-checkable-disabled f-jc-c'
                : selectedExpirations[i]
                ? 'f-jc-sb'
                : ' f-jc-c '
            }`}
            onChange={(e) => {
              selectedExpirations[i] = e;
              setSelectedExpirations([...selectedExpirations]);
            }}
          >
            {selectedExpirations[i] ? <CheckboxIcon /> : null}

            <div
              className={`f-fd-c f-jc-sb f-ai-c h28 flh100 mv4 ${
                item.expiry ? 'f-jc-sb' : 'f-jc-c'
              }`}
            >
              <div className='fls7 fs14 fwb'>{item.label}</div>
              {item.expiry ? (
                <div className='fls6 fs12'>{item.expiry}</div>
              ) : null}
            </div>
          </CheckableTag>
        </Col>
      ))}
    </Row>
  );
};
export default ExpirationChoice;
