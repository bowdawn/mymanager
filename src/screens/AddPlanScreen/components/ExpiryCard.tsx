import React, { FC } from 'react';

import { Tag } from 'antd';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { CheckableCardType } from 'src/assets/@types/checkableCardType';
const { CheckableTag } = Tag;

const ExpiryCard: FC<CheckableCardType> = ({
  extraLabel,
  checked,
  onChange,
  disabled,
  label,
}) => {
  return (
    <CheckableTag
      checked={checked}
      className={`h70 wp100 br4 f-fd-c pv10 f-ai-c ${
        disabled
          ? 'ant-tag-checkable-disabled f-jc-c'
          : checked
          ? 'f-jc-sb'
          : ' f-jc-c '
      }`}
      onChange={(e) => {
        onChange(e);
      }}
    >
      {checked ? <CheckboxIcon /> : null}

      <div
        className={`f-fd-c f-jc-sb f-ai-c h28 flh100 mv4 ${
          extraLabel ? 'f-jc-sb' : 'f-jc-c'
        }`}
      >
        <div className='fls7 fs14 fwb'>{label}</div>
        {extraLabel ? <div className='fls6 fs12'>{extraLabel}</div> : null}
      </div>
    </CheckableTag>
  );
};
export default ExpiryCard;
