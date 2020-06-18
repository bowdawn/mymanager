import React, { FC, useState } from 'react';
import Header from 'src/components/header';
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
import {
  SaveOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
  RedoOutlined,
} from '@ant-design/icons';
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
  '종합',
  '4대질병',
  '3대질병',
  '2대질병',
  '임플랜',
  '수술/입원',
  '간병인',
  '어린이',
  '실손',
  '간편실손',
  '치매',
  '운전자',
  '치아',
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

const DummyPage4: FC = (props: any) => {
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
      <Header title='빠른 설계' />
      <Row className='ant-row-primary-color' justify='center' gutter={[0, 20]}>
        <Col>감백호 님 보험연령 46세</Col>
      </Row>
      <Space direction='vertical' style={{ width: '100%' }}>
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
            <Card onClick={() => setQuickPlanCollapse(!quickPlanCollapse)}>
              <Row justify='space-between'>
                <Col>빠른 설계</Col>
                <Col>
                  <DownOutlined
                    className='rotate-transition'
                    rotate={quickPlanCollapse ? 0 : -180}
                  />
                </Col>
              </Row>
              <Collapse
                className='transparent-collapse'
                activeKey={[quickPlanCollapse ? '1' : '0']}
              >
                <Panel showArrow={false} header={null} key='1'>
                  <Row gutter={[8, 8]}>
                    {tagsData.map((item: any, i: number) => (
                      <Col span={6}>
                        <div onClick={(e) => e.stopPropagation()}>
                          <CheckableTag
                            checked={quickPlanOptions[i]}
                            style={{ width: '100%' }}
                            onChange={(e) => {
                              quickPlanOptions[i] = e;
                              setQuickPlanOptions([...quickPlanOptions]);
                            }}
                          >
                            {item}
                          </CheckableTag>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Panel>
              </Collapse>
            </Card>
            <Row justify='start'>
              <Col>성품군 선택</Col>
            </Row>

            <Carousel
              arrows={true}
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              draggable={true}
              slidesPerRow={4}
              dots={false}
              infinite={false}
            >
              {productTypes.map((item: any, i: number) => (
                <CheckableTag
                  checked={selectedProductedTypes[i]}
                  onChange={(e) => {
                    selectedProductedTypes[i] = e;
                    setSelectedProductTypes([...selectedProductedTypes]);
                  }}
                >
                  {item}
                </CheckableTag>
              ))}
            </Carousel>
            <Row justify='start'>
              <Col>플랜선택</Col>
            </Row>

            <Carousel
              arrows={true}
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              draggable={true}
              slidesPerRow={4}
              dots={false}
              infinite={false}
            >
              {planTypes.map((item: any, i: number) => (
                <CheckableTag
                  checked={selectedPlanTypes[i]}
                  onChange={(e) => {
                    selectedPlanTypes[i] = e;
                    setSelectedPlanTypes([...selectedPlanTypes]);
                  }}
                >
                  {item}
                </CheckableTag>
              ))}
            </Carousel>
            <Row justify='start'>
              <Col>회사선택</Col>
            </Row>
            <Row gutter={[0, 0]}>
              {companies.map((item: any, i: number) => (
                <Col style={{ width: '20%' }}>
                  <CheckableTag
                    checked={selectedCompanies[i]}
                    style={{ width: '100%' }}
                    onChange={(e) => {
                      selectedCompanies[i] = e;
                      setSelectedCompanies([...selectedCompanies]);
                    }}
                  >
                    {item}
                  </CheckableTag>
                </Col>
              ))}
            </Row>
          </Space>
        </div>
        <Space direction='vertical' style={{ width: '100%' }}></Space>
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
                  onClick={() =>
                    message.info('reset button: to be implemented')
                  }
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
      </Space>
    </div>
  );
};
export default DummyPage4;
