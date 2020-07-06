import React, { FC, useState } from 'react';
import Header from 'src/components/MyHeader';
import Footer from 'src/components/MyFooter';
import { message, Row, Col, Carousel, Tag, Collapse, Button } from 'antd';
import Icon from '@ant-design/icons';

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
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as ArrowUpIcon } from 'src/assets/icons/arrow-up.svg';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg';
import { ReactComponent as ResetIcon } from 'src/assets/icons/reset.svg';
import { ReactComponent as StandardIcon } from 'src/assets/icons/standard.svg';
import { ReactComponent as PremiumIcon } from 'src/assets/icons/premium.svg';

const { Panel } = Collapse;
const { CheckableTag } = Tag;
const tabs = [
  {
    title: '3대질병',
    cards: [
      { content: '3대질병 content 1 ' },
      { content: '3대질병 content 2 ' },
    ],
  },
  {
    title: '4대질병',
    cards: [
      { content: '4대질병 content 1 ' },
      { content: '4대질병 content 2 ' },
    ],
  },
  {
    title: '운전자보험',
    cards: [
      { content: '운전자보험 content 1 ' },
      { content: '운전자보험 content 2 ' },
    ],
  },
  {
    title: '암보혐',
    cards: [{ content: '암보혐 content 1 ' }, { content: '암보혐 content 2 ' }],
  },
  {
    title: '실손보험',
    cards: [
      { content: '실손보험 content 1 ' },
      { content: '실손보험 content 2 ' },
    ],
  },
];

const tagsData = [
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
    label: '임플랜',
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

const productTypes = [
  '장기',
  '저해지',
  '간편심사',
  '어린이',
  '어린이무해지',
  '간편실손',
  '치매',
  '치아',
  '운전자',
  '운전자(갱신)',
];

const planTypes = [
  '종합',
  '4대질병',
  '3대질병',
  '2대질병',
  '암',
  '수술/입원',
  '간병인',
];

const companies = [
  '한화',
  '삼성',
  '현대',
  'KB',
  '처브',
  '라이나',
  '메리츠',
  '교보',
  'Aio',
  '메트',
];

const expirationOptions = [
  { label: '10년', expiry: '만기', disabled: true },
  { label: '80세', expiry: '만기', disabled: false },
  { label: '90세', expiry: '만기', disabled: false },
  { label: '95세', expiry: '만기', disabled: false },
  { label: '100세', expiry: '만기', disabled: false },
  { label: '갱신', expiry: null, disabled: true },
];

const pricePlans = [
  { label: '표준형', icon: <StandardIcon />, disabled: false },
  { label: '고급형', icon: <PremiumIcon />, disabled: true },
];

const AddPlanScreen: FC = (props: any) => {
  const [saveModal, setSaveModal] = useState(0);
  const [quickPlanCollapse, setQuickPlanCollapse] = useState(false);
  const [quickPlanOptions, setQuickPlanOptions] = useState([
    ...tagsData.map((item: any) => false),
  ]);
  const [selectedProductedTypes, setSelectedProductTypes] = useState([
    ...productTypes.map((item: any) => false),
  ]);
  const [selectedPlanTypes, setSelectedPlanTypes] = useState([
    ...planTypes.map((item: any) => false),
  ]);
  const [selectedCompanies, setSelectedCompanies] = useState([
    ...companies.map((item: any) => false),
  ]);
  const [selectedExpirations, setSelectedExpirations] = useState([
    ...expirationOptions.map((item: any) => false),
  ]);
  const [selectedPricePlans, setSelectedPricePlans] = useState([
    ...pricePlans.map((item: any) => false),
  ]);
  const [rotate, setRotate] = useState(false);

  return (
    <div>
      <Header title='빠른 설계' subHeader={{ name: '김백호', age: 46 }} />

      <div onClick={() => setQuickPlanCollapse(!quickPlanCollapse)}>
        <div className='f-jc-sb f-ai-c ph16 pt20 pb10'>
          <div className='fs12 fls60 fwb'>빠른 설계</div>

          <Icon rotate={quickPlanCollapse ? 180 : 0} component={ArrowUpIcon} />
        </div>
        <div className='h1 fo1 bc-bt' />
        <Collapse
          className='transparent-collapse'
          activeKey={[quickPlanCollapse ? '1' : '0']}
        >
          <Panel showArrow={false} header={null} key='1'>
            <Row className='bc-wt p16' gutter={[7, 7]}>
              {tagsData.map((item: any, i: number) => (
                <Col className='wp20 f-jc-c'>
                  <div className='f f1' onClick={(e) => e.stopPropagation()}>
                    <CheckableTag
                      className='h78 f1 br4 pv8'
                      checked={quickPlanOptions[i]}
                      onChange={(e) => {
                        quickPlanOptions[i] = e;
                        setQuickPlanOptions([...quickPlanOptions]);
                      }}
                    >
                      {quickPlanOptions[i] ? (
                        <div className='rel '>
                          <div className='abs f l8'>
                            <CheckboxIcon className='h11 w11' />
                          </div>
                        </div>
                      ) : null}
                      <div className='f-fd-c f-ai-c f-jc-sb'>
                        {item.icon}
                        <div className='fs12 fls110'>{item.label}</div>
                      </div>
                    </CheckableTag>
                  </div>
                </Col>
              ))}
            </Row>
          </Panel>
        </Collapse>
      </div>

      <div className='ph16 pt40'>
        <div className='fs12 fls60 fwb mb10 ph2-5'>성품군 선택</div>

        <Carousel
          className='slick-prev-left-0 slick-next-right-0 ph16  mb40'
          arrows={true}
          prevArrow={<Icon component={ArrowLeftIcon} />}
          nextArrow={<Icon component={ArrowRightIcon} />}
          draggable={true}
          slidesPerRow={4}
          dots={false}
          infinite={false}
        >
          {productTypes.map((item: any, i: number) => (
            <div>
              <div className='f-jc-c ph2-5'>
                <CheckableTag
                  className={
                    selectedProductedTypes[i]
                      ? 'h70 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
                      : 'h70 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
                  }
                  checked={selectedProductedTypes[i]}
                  onChange={(e) => {
                    selectedProductedTypes[i] = e;
                    setSelectedProductTypes([...selectedProductedTypes]);
                  }}
                >
                  {selectedProductedTypes[i] ? (
                    <CheckboxIcon className='pt2' />
                  ) : null}
                  <div
                    className={
                      selectedProductedTypes[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                    }
                  >
                    {item}
                  </div>
                </CheckableTag>
              </div>
            </div>
          ))}
        </Carousel>
        <div className='fs12 fls60 fwb mb10 ph2-5'>플랜선택</div>

        <Carousel
          className='slick-prev-left-0 slick-next-right-0 ph16 mb40'
          arrows={true}
          prevArrow={<Icon component={ArrowLeftIcon} />}
          nextArrow={<Icon component={ArrowRightIcon} />}
          draggable={true}
          slidesPerRow={4}
          dots={false}
          infinite={false}
        >
          {planTypes.map((item: any, i: number) => (
            <div>
              <div className='f-jc-c ph2-5'>
                <CheckableTag
                  className={
                    selectedPlanTypes[i]
                      ? 'h70 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
                      : 'h70 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
                  }
                  checked={selectedPlanTypes[i]}
                  onChange={(e) => {
                    selectedPlanTypes[i] = e;
                    setSelectedPlanTypes([...selectedPlanTypes]);
                  }}
                >
                  {selectedPlanTypes[i] ? (
                    <CheckboxIcon className='pt2' />
                  ) : null}
                  <div
                    className={
                      selectedPlanTypes[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                    }
                  >
                    {item}
                  </div>
                </CheckableTag>
              </div>
            </div>
          ))}
        </Carousel>
        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 ph2-5'>회사 선택</div>
          <Row gutter={[7, 7]}>
            {companies.map((item: any, i: number) => (
              <Col className='wp20'>
                <CheckableTag
                  checked={selectedCompanies[i]}
                  className={
                    selectedCompanies[i]
                      ? 'h60 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
                      : 'h60 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
                  }
                  onChange={(e) => {
                    selectedCompanies[i] = e;
                    setSelectedCompanies([...selectedCompanies]);
                  }}
                >
                  {selectedCompanies[i] ? (
                    <CheckboxIcon className='pt2' />
                  ) : null}
                  <div
                    className={
                      selectedCompanies[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                    }
                  >
                    {item}
                  </div>
                </CheckableTag>
              </Col>
            ))}
          </Row>
        </div>

        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 ph2-5'>만기선택</div>
          <Row gutter={[7, 7]}>
            {expirationOptions.map((item: any, i: number) => (
              <Col span={8}>
                <CheckableTag
                  checked={selectedExpirations[i]}
                  className={
                    item.disabled
                      ? 'h70 wp100 br4 f-fd-c f-jc-c f-ai-c pv10 ant-tag-checkable-disabled'
                      : selectedExpirations[i]
                      ? 'h70 wp100 br4 f-fd-c f-jc-sb f-ai-c pv10'
                      : 'h70 wp100 br4 f-fd-c f-jc-c f-ai-c pv10'
                  }
                  onChange={(e) => {
                    selectedExpirations[i] = e;
                    setSelectedExpirations([...selectedExpirations]);
                  }}
                >
                  {selectedExpirations[i] ? <CheckboxIcon /> : null}
                  <div
                    className={
                      selectedExpirations[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                    }
                  >
                    <div className='f-fd-c f-jc-sb f-ai-c h28 flh100 mv4'>
                      <div className='fls7 fs14 fwb '>{item.label}</div>
                      <div className='fls6 fs12'>{item.expiry}</div>
                    </div>
                  </div>
                </CheckableTag>
              </Col>
            ))}
          </Row>
        </div>

        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 ph2-5'>가격종류</div>
          <Row gutter={[7, 7]}>
            {pricePlans.map((item: any, i: number) => (
              <Col span={12}>
                <CheckableTag
                  checked={selectedPricePlans[i]}
                  className={
                    item.disabled
                      ? 'h92 wp100 br4 pv15 ant-tag-checkable-disabled'
                      : selectedPricePlans[i]
                      ? 'h92 wp100 br4 fill-primary-hover fill-primary pv15'
                      : 'h92 wp100 br4 fill-primary-hover  pv15'
                  }
                  onChange={(e) => {
                    selectedPricePlans[i] = e;
                    setSelectedPricePlans([...selectedPricePlans]);
                  }}
                >
                  <div className='f-fd-c f-jc-sb f-ai-c '>
                    {selectedPricePlans[i] ? (
                      <div className='rel '>
                        <div className='abs f l-39'>
                          <CheckboxIcon className='h11 w11' />
                        </div>
                      </div>
                    ) : null}
                    {item.icon}
                    <div
                      className={
                        selectedPricePlans[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                      }
                    >
                      {item.label}
                    </div>
                  </div>
                </CheckableTag>
              </Col>
            ))}
          </Row>
        </div>

        <div className='f f-ai-c h55 mb50'>
          <Button
            className={rotate ? 'hp100 mr8 br4 rot-360' : 'hp100 mr8 br4'}
            onAnimationEnd={() => setRotate(false)}
            onClick={() => {
              setRotate(true);
              message.info('reset button: to be implemented');
            }}
          >
            <ResetIcon />
          </Button>

          <Button
            type='primary'
            className='f1 fls8 fs18 fwb hp100 br4'
            onClick={() =>
              message.info('send to kakaotalk button: to be implemented')
            }
          >
            간편 보험료 설계
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AddPlanScreen;
