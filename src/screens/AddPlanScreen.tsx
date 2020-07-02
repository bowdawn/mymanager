import React, { FC, useState } from 'react';
import Header from 'src/components/MyHeader';
import {
  message,
  Space,
  Row,
  Col,
  Radio,
  Tabs,
  Carousel,
  Card,
  Tag,
  Collapse,
  Button,
  Modal,
} from 'antd';
import Icon, {
  SaveOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
  RedoOutlined,
} from '@ant-design/icons';

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

const { TabPane } = Tabs;
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
                {selectedCompanies[i] ? <CheckboxIcon className='pt2' /> : null}
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

      <div
        style={{
          paddingRight: 25,
          paddingLeft: 25,
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Space direction='vertical' style={{ width: '100%' }}>
          <Card
            className='ant-card-hover-primary-border'
            onClick={() => message.info('add product: to be implemented')}
          >
            <div>상품 추가하기</div>
            <PlusOutlined style={{ fontSize: 25 }} />
          </Card>

          <Row gutter={[8, 25]}>
            <Col>
              <Button
                size='large'
                onClick={() => message.info('reset button: to be implemented')}
              >
                <RedoOutlined rotate={-90} />
              </Button>
            </Col>
            <Col flex={1}>
              <Button
                type='primary'
                size='large'
                style={{ width: '100%' }}
                onClick={() =>
                  message.info('send to kakaotalk button: to be implemented')
                }
              >
                카카오톡으로 보내기
              </Button>
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};
export default AddPlanScreen;
