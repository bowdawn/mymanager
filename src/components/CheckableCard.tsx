import React, { FC } from 'react';
import { Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { CheckableCardType } from 'src/assets/@types/checkableCardType';

const { CheckableTag } = Tag;
const CheckableCard: FC<CheckableCardType> = ({ label, checked, onChange }) => {
  return (
    <CheckableTag
      checked={checked}
      className={
        checked
          ? 'h60 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
          : 'h60 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
      }
      onChange={(e) => {
        checked = e;
        onChange(e);
      }}
    >
      {checked ? <CheckboxIcon className='pt2 fs14' /> : null}
      <div className={checked ? 'fs14 fls7 fwb' : 'fs14 fls7'}>{label}</div>
    </CheckableTag>
  );
};
export default CheckableCard;
