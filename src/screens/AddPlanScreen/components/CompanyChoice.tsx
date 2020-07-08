import React, { FC, useState } from 'react';

import { Row, Col, Tag } from 'antd';

import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { companies } from 'src/assets/constants/index';

const { CheckableTag } = Tag;

const CompanyChoice: FC = (props: any) => {
  const [selectedCompanies, setSelectedCompanies] = useState([
    ...companies.map((item: any) => false),
  ]);
  return (
    <Row gutter={[7, 7]}>
      {companies.map((item: any, i: number) => (
        <Col className='wp20'>
          <CheckableTag
            checked={selectedCompanies[i]}
            className={
              selectedCompanies[i]
                ? 'h60 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
                : 'h60 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
            }
            onChange={(e) => {
              selectedCompanies[i] = e;
              setSelectedCompanies([...selectedCompanies]);
            }}
          >
            {selectedCompanies[i] ? <CheckboxIcon className='pt2' /> : null}
            <div
              className={selectedCompanies[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'}
            >
              {item}
            </div>
          </CheckableTag>
        </Col>
      ))}
    </Row>
  );
};
export default CompanyChoice;
