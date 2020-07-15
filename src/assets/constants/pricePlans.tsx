import { ReactComponent as StandardIcon } from 'src/assets/icons/standard.svg';
import { ReactComponent as PremiumIcon } from 'src/assets/icons/premium.svg';
import React from 'react';
const pricePlans = [
  { label: '표준형', icon: <StandardIcon />, value: '1' },
  { label: '고급형', icon: <PremiumIcon />, value: '2' },
];

export default pricePlans;
