import React, { FC } from 'react';
import { Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { CheckableCardType } from 'src/assets/@types/checkableCardType';

const { CheckableTag } = Tag;
const CheckableCard: FC<CheckableCardType> = ({
  label,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <div className='curser-not-allowed wp100'>
      <CheckableTag
        checked={checked}
        className={`h60 wp100 br4 f-fd-c  f-ai-c pv8 
      ${disabled ? ' ant-tag-checkable-disabled ' : ' '}
      ${checked ? ' f-jc-sb ' : ' f-jc-c '}`}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {checked ? <CheckboxIcon className='pt2 fs14' /> : null}
        <div className={checked ? 'fs14 fls7 fwb' : 'fs14 fls7'}>{label}</div>
      </CheckableTag>
    </div>
  );
};
export default CheckableCard;
