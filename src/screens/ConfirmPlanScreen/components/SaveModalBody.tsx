import React, { FC, useState } from 'react';
import { message, Space, Radio, Button, Modal } from 'antd';
import { myPlans } from 'src/assets/constants/index';

interface Props {
  setVisible: (value: boolean) => void;
}

const SaveModalBody: FC<Props> = ({ setVisible }) => {
  const [savedClicked, setSavedClicked] = useState(false);

  return (
    <div className='ant-override'>
      {(!savedClicked
        ? [
            <div className='fs18 fwb fo9 fc-bt'>저장 위치를 선택해주세요.</div>,
            <div className='fls70 mb24'>
              * 이전 데이터가 있을 경우 사라질 수 있습니다.
            </div>,
            <Radio.Group className='wp100'>
              <Space
                direction='vertical'
                className='wp100 mb24'
                align='center'
                size={10}
              >
                {myPlans.map((item: any, index: number) => (
                  <Radio.Button
                    value={item.value}
                    key={`save-plan-${index + 1}`}
                    onClick={() =>
                      message.info(
                        `save my plan ${index + 1} button : to be implemented`
                      )
                    }
                  >
                    {item.label}
                  </Radio.Button>
                ))}
              </Space>
            </Radio.Group>,
            <div className='f '>
              <Button
                className='f1 mr8 primary-border-button-hover br4'
                onClick={() => setVisible(false)}
              >
                취소
              </Button>

              <Button
                type='primary'
                className='f1 br4'
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
