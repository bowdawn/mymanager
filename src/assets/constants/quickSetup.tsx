import React from 'react';
import { ReactComponent as AllIcon } from 'src/assets/icons/all.svg';
import { ReactComponent as FourMajorDiseasesIcon } from 'src/assets/icons/four-major-diseases.svg';
import { ReactComponent as ThreeMajorDiseasesIcon } from 'src/assets/icons/three-major-diseases.svg';
import { ReactComponent as TwoMajorDiseasesIcon } from 'src/assets/icons/two-major-diseases.svg';
import { ReactComponent as CancerPlanIcon } from 'src/assets/icons/cancer-plan.svg';
import { ReactComponent as SurgeryIcon } from 'src/assets/icons/surgery.svg';
import { ReactComponent as CaregiverIcon } from 'src/assets/icons/caregiver.svg';
import { ReactComponent as ChildrenIcon } from 'src/assets/icons/children.svg';
import { ReactComponent as FinancialLossIcon } from 'src/assets/icons/financial-loss.svg';
import { ReactComponent as BasicFinancialLossIcon } from 'src/assets/icons/basic-financial-loss.svg';
import { ReactComponent as DementiaIcon } from 'src/assets/icons/dementia.svg';
import { ReactComponent as DriverIcon } from 'src/assets/icons/driver.svg';
import { ReactComponent as DentalIcon } from 'src/assets/icons/dental.svg';

const quickSetup = [
  {
    label: '종합',
    icon: <AllIcon />,
  },
  {
    label: '4대질병',
    icon: <FourMajorDiseasesIcon />,
  },
  {
    label: '3대질병',
    icon: <ThreeMajorDiseasesIcon />,
  },
  {
    label: '2대질병',
    icon: <TwoMajorDiseasesIcon />,
  },
  {
    label: '암플랜',
    icon: <CancerPlanIcon />,
  },
  {
    label: '수술/입원',
    icon: <SurgeryIcon />,
  },
  {
    label: '간병인',
    icon: <CaregiverIcon />,
  },
  {
    label: '어린이',
    icon: <ChildrenIcon />,
  },
  {
    label: '실손',
    icon: <FinancialLossIcon />,
  },
  {
    label: '간편실손',
    icon: <BasicFinancialLossIcon />,
  },

  {
    label: '치매',
    icon: <DementiaIcon />,
  },
  {
    label: '운전자',
    icon: <DriverIcon />,
  },
  {
    label: '치아',
    icon: <DentalIcon />,
  },
];

export default quickSetup;
