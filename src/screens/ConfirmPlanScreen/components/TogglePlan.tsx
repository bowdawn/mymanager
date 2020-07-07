import React, { FC, useState } from 'react';
import { message, Radio } from 'antd';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';

const PlanToggle: FC<any> = (props: any) => {
  const [myPlan, setMyPlan] = useState('');
  let myPlans = [
    { label: '나의 플랜 1', value: 'a' },
    { label: '나의 플랜 2', value: 'b' },
    { label: '나의 플랜 3', value: 'c' },
  ];
  return (
    <div>
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
            onClick={() =>
              message.info('plan toggle button: to be implemented')
            }
          >
            <div className='f-jc-c'>
              {item.value === myPlan ? <Checkbox /> : null}
            </div>
            <div>{item.label}</div>
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};
export default PlanToggle;
