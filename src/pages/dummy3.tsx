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
  Divider,
} from 'antd';
import Icon, {
  SaveOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as SaveIcon } from 'src/assets/icons/save.svg';
import { ReactComponent as PrevArrow } from 'src/assets/icons/carousel-arrow-left.svg';
import { ReactComponent as NextArrow } from 'src/assets/icons/carousel-arrow-right.svg';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus-icon.svg';
import Footer from 'src/components/footer';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const myPlans = [
  { label: '나의 플랜 1', value: 'a' },
  { label: '나의 플랜 2', value: 'b' },
  { label: '나의 플랜 3', value: 'c' },
];

const tabs = [
  {
    title: '3대질병',
    cards: [
      { content: '카드를 선택하세요' },
      { content: '다른 카드를 선택하세요' },
    ],
  },
  {
    title: '4대질병',
    cards: [
      { content: '4대질병 카드를 선택하세요' },
      { content: '다른 4대질병 카드를 선택하세요' },
    ],
  },
  {
    title: '운전자보험',
    cards: [
      { content: '운전자보험 카드를 선택하세요' },
      { content: '다른 운전자보험 카드를 선택하세요 ' },
    ],
  },
  {
    title: '암보혐',
    cards: [
      { content: '암보혐 카드를 선택하세요' },
      { content: '다른 암보혐 카드를 선택하세요' },
    ],
  },
  {
    title: '실손보험',
    cards: [
      { content: '실손보험 카드를 선택하세요' },
      { content: '다른 실손보험 카드를 선택하세요' },
    ],
  },
];

const productCards = [
  {
    title: '무)간편건강보험과건강하게사는이야기(20.4)',
    tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
    type: '삼성화재',
    price: 82000,
    ageGroupPlan: [
      { age: 51, price: 87000, premium: 2145000 },
      { age: 56, price: 92000, premium: 3145000 },
      { age: 61, price: 97000, premium: 4145000 },
    ],
  },
  {
    title: '무)간편건강보험과건강하게사는이야기(20.4)',
    tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
    type: '삼성화재',
    price: 82000,
    ageGroupPlan: [
      { age: 51, price: 87000, premium: 2145000 },
      { age: 56, price: 92000, premium: 3145000 },
      { age: 61, price: 97000, premium: 4145000 },
    ],
  },
];

const DummyPage3: FC = (props: any) => {
  const [collapsedKeyArray, setCollapsedKeyArray] = useState([
    ...productCards.map((item: any) => '0'),
  ]);

  const [saveModal, setSaveModal] = useState(0);

  const [myPlan, setMyPlan] = useState('');

  return (
    <div>
      <Header
        title='플랜 확인'
        extra={
          <div className='f-fd-c' onClick={() => setSaveModal(1)}>
            <Icon className='mb6' component={() => <SaveIcon />} />
            <div className='fs12 fls6'>플랜저장</div>
          </div>
        }
        backgroundColor
      />
      <Row className='ant-row-midnight ' justify='center'>
        <Col>
          <div className='pv10 fs18'>
            <span className='fc-dsb'>김백호</span>님 보험연령
            <span className='fc-dsb'>46</span>세
          </div>
        </Col>
      </Row>

      <div className='ph16 pt20 f-fd-c f-jc-sb '>
        <div className='pb10'>나의 플랜</div>
        <Radio.Group
          className='f wp100 pb40'
          value={myPlan}
          onChange={(event) => setMyPlan(event.target.value)}
        >
          {myPlans.map((item: any, index: number) => (
            <Radio.Button
              value={item.value}
              className={
                index === myPlans.length - 1
                  ? 'h70 f-ai-c f-jc-c f-fd-c wp100'
                  : 'h70 f-ai-c f-jc-c f-fd-c wp100 mr10'
              }
              onClick={() =>
                message.info('plan toggle button: to be implemented')
              }
            >
              <div className='f-jc-c'>
                {item.value === myPlan ? <Checkbox /> : null}
              </div>
              <div>{item.label}</div>
            </Radio.Button>
          ))}
        </Radio.Group>
        <div className='pb10'>카드 뉴스</div>
      </div>

      <Divider />

      <Tabs
        defaultActiveKey='0'
        tabPosition={'top'}
        tabBarGutter={0}
        onTabScroll={(event) => console.log(event)}
        className='mb24'
      >
        {tabs.map((item: any, i: number) => (
          <TabPane tab={<div className='w78 f-jc-c'>{item.title}</div>} key={i}>
            <Carousel
              arrows={true}
              prevArrow={<Icon component={() => <PrevArrow />} />}
              nextArrow={<Icon component={() => <NextArrow />} />}
              draggable={true}
              dots={false}
            >
              {item.cards.map((item: any, j: number) => (
                <div
                  key={`card${i}-${j}`}
                  onClick={() =>
                    message.info(
                      'selected card news on click: to be implemented'
                    )
                  }
                >
                  <div className='f-jc-c f-ai-c fc-pc fu fls7 h328'>
                    {item.content}
                  </div>
                </div>
              ))}
            </Carousel>
          </TabPane>
        ))}
      </Tabs>

      <div
        className='ph16 f-fd-c f-jc-sb f-ai-c'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Space direction='vertical' size={10} style={{ width: '100%' }}>
          {productCards.map((item: any, i: number) => (
            <Card
              className='ant-card-no-padding'
              key={`productcard-${i}`}
              hoverable
              onClick={() =>
                message.info('product card on click: to be implemented')
              }
            >
              <div className='p16'>
                <div className='f-jc-sb'>
                  <Space size={8}>
                    {item.tags.map((tag: any, j: number) => (
                      <div className='fls7' key={`tag${i}-${j}`}>
                        {tag}
                      </div>
                    ))}
                  </Space>

                  <Icon
                    component={() => (
                      <DeleteIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          message.info('delete card: to be implemented');
                        }}
                      />
                    )}
                  />
                </div>

                <div className='fs12 fc-gf mb10'>{item.title}</div>

                <Row justify='space-between'>
                  <Col>
                    <Tag color={darkSkyBlue} className='fc-w'>
                      {item.type}
                    </Tag>
                  </Col>
                  <Col className='fwb'>
                    {item.price.toLocaleString('ko-Kr')}원
                  </Col>
                </Row>
              </div>
              <Collapse activeKey={[collapsedKeyArray[i]]}>
                <Panel showArrow={false} header={null} key='1'>
                  {item.ageGroupPlan.map((_item: any) => (
                    <Row justify={'space-between'}>
                      <Col>{_item.age}세</Col>
                      <Col>
                        <Space>
                          <div>{_item.price.toLocaleString('ko-Kr')}원</div>
                          <div>{_item.premium.toLocaleString('ko-Kr')}원</div>
                        </Space>
                      </Col>
                    </Row>
                  ))}
                </Panel>
              </Collapse>

              <div
                className='f-jc-c f-ai-c pv8 lighten-svg-hover  lighten-svg-text-hover '
                onClick={(e) => {
                  e.stopPropagation();
                  collapsedKeyArray[i] =
                    collapsedKeyArray[i] === '1' ? '0' : '1';
                  setCollapsedKeyArray([...collapsedKeyArray]);
                }}
              >
                <div className='mr4'>연령별 설계</div>
                <CaretDownOutlined
                  className='ml4 rotate-transition fs7'
                  rotate={collapsedKeyArray[i] === '1' ? 180 : 0}
                />
              </div>
            </Card>
          ))}
          <Button
            className='f-jc-c f-ai-c h76 wp100 mb40 fwb fls7'
            onClick={() => message.info('add product: to be implemented')}
          >
            <div className='mr4'>상품 추가하기</div>
            <PlusIcon className='ml4' />
          </Button>
        </Space>
        <div className='f wp100 mb50'>
          <Button
            className='mr8'
            size='large'
            onClick={() => message.info('cancel button: to be implemented')}
          >
            취소
          </Button>

          <Button
            className='f1'
            type='primary'
            size='large'
            style={{ width: '100%' }}
            onClick={() =>
              message.info('send to kakaotalk button: to be implemented')
            }
          >
            카카오톡으로 보내기
          </Button>
        </div>
      </div>
      <Footer />
      <Modal
        closable={false}
        title={null}
        visible={saveModal !== 0}
        footer={
          saveModal === 1 ? (
            <Row>
              <Col flex={1}>
                <Button
                  style={{ width: '100%' }}
                  onClick={() => setSaveModal(0)}
                >
                  취소
                </Button>
              </Col>
              <Col flex={1}>
                <Button
                  type='primary'
                  style={{ width: '100%' }}
                  onClick={() => setSaveModal(2)}
                >
                  저장
                </Button>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col flex={1}>
                <Button
                  type='primary'
                  style={{ width: '100%' }}
                  onClick={() => setSaveModal(0)}
                >
                  닫기
                </Button>
              </Col>
            </Row>
          )
        }
        onCancel={() => setSaveModal(0)}
        width={275}
        centered
      >
        {(saveModal === 1
          ? [
              <div>어디에 저장하실지 선택해주세요</div>,
              <div>*이전 데이터가 있을 경우 사라질 수 있습니다.</div>,
              <Radio.Group buttonStyle='solid' style={{ width: '100%' }}>
                <Space
                  direction='vertical'
                  style={{ width: '100%' }}
                  align='center'
                >
                  <Radio.Button
                    value='a'
                    onClick={() =>
                      message.info('save my plan 1 button : to be implemented')
                    }
                  >
                    나의 플랜1
                  </Radio.Button>
                  <Radio.Button
                    value='b'
                    onClick={() =>
                      message.info('save my plan 2 button : to be implemented')
                    }
                  >
                    나의 플랜2
                  </Radio.Button>
                  <Radio.Button
                    value='c'
                    onClick={() =>
                      message.info('save my plan 3 button : to be implemented')
                    }
                  >
                    나의 플랜3
                  </Radio.Button>
                </Space>
              </Radio.Group>,
            ]
          : [<div>저장이 완료 되었습니다</div>]
        ).map((item: any) => item)}
      </Modal>
    </div>
  );
};
export default DummyPage3;
