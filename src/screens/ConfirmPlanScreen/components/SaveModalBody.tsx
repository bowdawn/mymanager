import React, { FC, useState } from 'react';
import { message, Space, Radio, Button } from 'antd';
import { myPlans } from 'src/assets/constants/index';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';

interface Props {
  setVisible: (value: boolean) => void;
}
const SaveModalBody: FC<Props> = ({ setVisible }) => {
  const [savedClicked, setSavedClicked] = useState(false);
  const [myPlan, setMyPlan] = useState('');
  return (
    <div className='ant-override'>
      {(!savedClicked
        ? [
            <div className='fs18 fwb fo9 fc-bt'>저장 위치를 선택해주세요.</div>,
            <div className='fls70 mb24'>
              * 이전 데이터가 있을 경우 사라질 수 있습니다.
            </div>,
            <Radio.Group
              className='wp100'
              value={myPlan}
              onChange={(event) => setMyPlan(event.target.value)}
            >
              <div className='f-fd-c f-ai-c mb14'>
                {myPlans.map((item: any, index: number) => (
                  <Radio.Button
                    className='h48 w136 mb10 f-jc-c f-ai-c'
                    value={item.value}
                    key={`save-plan-${index + 1}`}
                    onClick={() =>
                      message.info(
                        `save my plan ${index + 1} button : to be implemented`
                      )
                    }
                  >
                    <div className='f-fd-r f-jc-c f-ai-c'>
                      {item.value === myPlan ? (
                        <Checkbox className='mr6' />
                      ) : null}

                      {item.label}
                    </div>
                  </Radio.Button>
                ))}
              </div>
            </Radio.Group>,
            <div className='f '>
              <Button
                className='f1 mr8 h55 primary-border-button-hover br4 w128'
                onClick={() => setVisible(false)}
              >
                취소
              </Button>

              <Button
                type='primary'
                className='f1 br4 h55 w128'
                onClick={() => setSavedClicked(true)}
              >
                저장
              </Button>
            </div>,
          ]
        : [
            <div className='f-jc-c mt36 mb42 '>저장이 완료 되었습니다</div>,
            <div className='f-jc-c'>
              <Button
                className='h55 w128 br4'
                type='primary'
                onClick={() => setVisible(false)}
              >
                닫기
              </Button>
            </div>,
          ]
      ).map((item: any) => item)}
    </div>
  );
};
export default SaveModalBody;
