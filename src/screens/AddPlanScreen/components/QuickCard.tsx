import React, { FC } from 'react';
import { Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { CheckableCardType } from 'src/assets/@types/checkableCardType';

const { CheckableTag } = Tag;
const CheckableCard: FC<CheckableCardType> = ({
  label,
  checked,
  onChange,
  icon,
}) => {
  return (
    <div className='f f1' onClick={(e) => e.stopPropagation()}>
      <CheckableTag
        className='h78 f1 br4 pv8'
        checked={checked}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {checked ? (
          <div className='rel '>
            <div className='abs f l8'>
              <CheckboxIcon className='h11 w11' />
            </div>
          </div>
        ) : null}
        <div className='f-fd-c f-ai-c f-jc-sb'>
          {icon}
          <div className='fs12 fls110'>{label}</div>
        </div>
      </CheckableTag>
    </div>
  );
};
export default CheckableCard;
