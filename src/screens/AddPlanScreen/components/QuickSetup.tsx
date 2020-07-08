import React, { FC, useState } from 'react';
import { Row, Col, Tag, Collapse } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as ArrowUpIcon } from 'src/assets/icons/arrow-up.svg';
import { quickSetup } from 'src/assets/constants/index';

const { Panel } = Collapse;
const { CheckableTag } = Tag;

const QuickSetup: FC = (props: any) => {
  const [quickPlanCollapse, setQuickPlanCollapse] = useState(false);
  const [quickPlanOptions, setQuickPlanOptions] = useState([
    ...quickSetup.map((item: any) => false),
  ]);

  return (
    <div onClick={() => setQuickPlanCollapse(!quickPlanCollapse)}>
      <div className='f-jc-sb f-ai-c ph16 pt20 pb10'>
        <div className='fs12 fls60 fwb'>빠른 설계</div>

        <Icon rotate={quickPlanCollapse ? 180 : 0} component={ArrowUpIcon} />
      </div>
      <div className='h1 fo1 bc-bt' />
      <Collapse
        className='transparent-collapse'
        activeKey={[quickPlanCollapse ? '1' : '0']}
      >
        <Panel showArrow={false} header={null} key='1'>
          <Row className='bc-wt p16' gutter={[7, 7]}>
            {quickSetup.map((item: any, i: number) => (
              <Col className='wp20 f-jc-c'>
                <div className='f f1' onClick={(e) => e.stopPropagation()}>
                  <CheckableTag
                    className='h78 f1 br4 pv8'
                    checked={quickPlanOptions[i]}
                    onChange={(e) => {
                      quickPlanOptions[i] = e;
                      setQuickPlanOptions([...quickPlanOptions]);
                    }}
                  >
                    {quickPlanOptions[i] ? (
                      <div className='rel '>
                        <div className='abs f l8'>
                          <CheckboxIcon className='h11 w11' />
                        </div>
                      </div>
                    ) : null}
                    <div className='f-fd-c f-ai-c f-jc-sb'>
                      {item.icon}
                      <div className='fs12 fls110'>{item.label}</div>
                    </div>
                  </CheckableTag>
                </div>
              </Col>
            ))}
          </Row>
        </Panel>
      </Collapse>
    </div>
  );
};
export default QuickSetup;
