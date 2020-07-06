import React, { FC, useState } from 'react';
import { Radio } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as FilterIcon } from 'src/assets/icons/filter-icon.svg';

const filters = [
  { label: '고객명', value: 'customerName' },
  { label: '보낸일자', value: 'sendDate' },
  { label: '신청일자', value: 'applyDate' },
];

interface Props {
  className?: string;
}

const MyFilter: FC<Props> = (props: any) => {
  const [filter, setFilter] = useState('none');
  return (
    <Radio.Group
      className={`f wp100 mt16 filter-radio-group ${props.className}`}
      defaultValue='customerName'
      onChange={(e) => {
        e.stopPropagation();
        setFilter('bottom');
      }}
    >
      {filters.map((item: any) => (
        <Radio.Button
          className='f1 f-jc-c'
          value={item.value}
          onClick={() => {
            setFilter(
              filter === 'bottom' ? 'top' : filter === 'top' ? 'none' : 'bottom'
            );
          }}
        >
          <div className='f-ai-c hp100'>
            <div className='f1'></div>
            <div>{item.label}</div>
            <div className='f1 f-jc-fe'>
              <Icon
                {...(filter === 'none'
                  ? {}
                  : filter === 'top'
                  ? { className: 'top-active' }
                  : { className: 'bottom-active' })}
                component={FilterIcon}
              />
            </div>
          </div>
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default MyFilter;
