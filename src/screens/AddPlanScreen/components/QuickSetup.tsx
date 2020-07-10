import React, {
  FC,
  useState,
  FunctionComponent,
  ReactComponentElement,
  ReactChild,
} from 'react';
import { Row, Col, Tag, Collapse } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as ArrowUpIcon } from 'src/assets/icons/arrow-up.svg';
import { quickSetup } from 'src/assets/constants/index';
import { QuickCard } from './index';

const { Panel } = Collapse;
const { CheckableTag } = Tag;

interface Props {
  title: string;
  collapsedBody: any;
}
const QuickSetup: FC<Props> = ({ title, collapsedBody }) => {
  const [quickPlanCollapse, setQuickPlanCollapse] = useState(false);
  return (
    <div onClick={() => setQuickPlanCollapse(!quickPlanCollapse)}>
      <div className='f-jc-sb f-ai-c ph16 pt20 pb10'>
        <div className='fs12 fls60 fwb'>{title}</div>
        <Icon rotate={quickPlanCollapse ? 180 : 0} component={ArrowUpIcon} />
      </div>
      <div className='h1 fo1 bc-bt' />
      <Collapse
        className='transparent-collapse'
        activeKey={[quickPlanCollapse ? '1' : '0']}
      >
        <Panel showArrow={false} header={null} key='1'>
          {collapsedBody}
        </Panel>
      </Collapse>
    </div>
  );
};
export default QuickSetup;
