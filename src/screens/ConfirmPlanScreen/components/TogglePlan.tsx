import React, { FC } from 'react';
import { message, Radio } from 'antd';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';
import { myPlans } from 'src/assets/constants/index';

interface Props {
  myPlan: string;
  setMyPlan: (value: string) => void;
}
const TogglePlan: FC<Props> = ({ myPlan, setMyPlan }) => {
  return (
    <Radio.Group
      className='f wp100 pb40'
      value={myPlan}
      onChange={(event) => setMyPlan(event.target.value)}
    >
      {myPlans.map((item: any, index: number) => (
        <Radio.Button
          value={item.value}
          className={
            index === myPlans.length - 1
              ? 'h70 f-ai-c f-jc-c f-fd-c wp100'
              : 'h70 f-ai-c f-jc-c f-fd-c wp100 mr10'
          }
          onClick={() => message.info('plan toggle button: to be implemented')}
        >
          <div className='f-jc-c'>
            {item.value === myPlan ? <Checkbox /> : null}
          </div>
          <div>{item.label}</div>
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};
export default TogglePlan;
