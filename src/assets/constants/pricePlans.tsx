import { ReactComponent as StandardIcon } from 'src/assets/icons/standard.svg';
import { ReactComponent as PremiumIcon } from 'src/assets/icons/premium.svg';
import React from 'react';
const pricePlans = [
  { label: '표준형', icon: <StandardIcon />, disabled: false },
  { label: '고급형', icon: <PremiumIcon />, disabled: true },
];

export default pricePlans;
