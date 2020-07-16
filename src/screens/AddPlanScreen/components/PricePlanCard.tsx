import React, { FC } from 'react';

import { Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { CheckableCardType } from 'src/assets/@types/checkableCardType';
const { CheckableTag } = Tag;

const CheckableCard: FC<CheckableCardType> = ({
  label,
  checked,
  disabled,
  onChange,
  icon,
}) => {
  return (
    <div className='curser-not-allowed wp100'>
      <CheckableTag
        checked={checked}
        className={`h92 wp100 br4 pv15 fill-primary-hover  
      ${disabled ? ' ant-tag-checkable-disabled ' : ' '}
      ${checked ? '  fill-primary ' : ' '}
      `}
        onChange={(e) => {
          onChange(e);
        }}
      >
        <div className='f-fd-c f-jc-sb f-ai-c '>
          {checked ? (
            <div className='rel '>
              <div className='abs f l-39'>
                <CheckboxIcon className='fs14' />
              </div>
            </div>
          ) : null}
          {icon}
          <div className={checked ? 'fs14 fls7 fwb' : 'fs14 fls7'}>{label}</div>
        </div>
      </CheckableTag>
    </div>
  );
};
export default CheckableCard;
