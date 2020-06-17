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
} from 'antd';
import {
  SaveOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  DownOutlined,
} from '@ant-design/icons';
const { TabPane } = Tabs;
const { Panel } = Collapse;
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

  return (
    <div>
      <Header
        title='플랜 확인'
        subTitle={
          <div onClick={() => message.info('save icon: to be implemented')}>
            <Space size={4}>
              <SaveOutlined style={{ fontSize: 25 }} />
              저장
            </Space>
          </div>
        }
      />
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
            <Row justify='start'>
              <Col>나의 플랜</Col>
            </Row>
            <Radio.Group buttonStyle='solid' style={{ width: '100%' }}>
              <Row gutter={10}>
                <Col flex={1}>
                  <Radio.Button value='a' style={{ width: '100%' }}>
                    나의 플랜 1
                  </Radio.Button>
                </Col>
                <Col flex={1}>
                  <Radio.Button value='b' style={{ width: '100%' }}>
                    나의 플랜 2
                  </Radio.Button>
                </Col>
                <Col flex={1}>
                  <Radio.Button value='c' style={{ width: '100%' }}>
                    나의 플랜 3
                  </Radio.Button>
                </Col>
              </Row>
            </Radio.Group>
          </Space>
        </div>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Row justify='start'>
            <Col style={{ paddingLeft: 25, paddingRight: 25 }}>카드 뉴스</Col>
          </Row>
          <Tabs
            defaultActiveKey='1'
            tabPosition={'top'}
            type='card'
            tabBarGutter={0}
            tabBarStyle={{ paddingLeft: 25, paddingRight: 25 }}
          >
            {tabs.map((item: any, i: number) => (
              <TabPane
                tab={item.title}
                key={i}
                forceRender
                style={{ paddingLeft: 25, paddingRight: 25 }}
              >
                <Carousel
                  arrows={true}
                  prevArrow={<LeftOutlined />}
                  nextArrow={<RightOutlined />}
                  draggable={true}
                >
                  {item.cards.map((item: any, j: number) => (
                    <Card key={`card${i}-${j}`} hoverable>
                      <div
                        style={{
                          height: 200,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {item.content}
                      </div>
                    </Card>
                  ))}
                </Carousel>
              </TabPane>
            ))}
          </Tabs>
        </Space>
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
            {productCards.map((item: any, i: number) => (
              <Card
                className='ant-card-no-padding'
                key={`productcard-${i}`}
                hoverable
              >
                <div style={{ padding: 8 }}>
                  <Row justify='space-between'>
                    <Col>{item.title}</Col>
                    <Col>
                      <DeleteOutlined
                        onClick={(e) => {
                          e.stopPropagation();
                          message.info('delete card: to be implemented');
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Space>
                        {item.tags.map((tag: any, j: number) => (
                          <div key={`tag${i}-${j}`}>{tag}</div>
                        ))}
                      </Space>
                    </Col>
                  </Row>
                  <Row justify='space-between'>
                    <Col>
                      <Tag color={'#37bd7d'}>{item.type}</Tag>
                    </Col>
                    <Col>{item.price.toLocaleString('ko-Kr')}원</Col>
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

                <Row
                  justify='center'
                  gutter={8}
                  onClick={() => {
                    collapsedKeyArray[i] =
                      collapsedKeyArray[i] === '1' ? '0' : '1';
                    setCollapsedKeyArray([...collapsedKeyArray]);
                  }}
                >
                  <Col>연령별 설계</Col>
                  <Col>
                    <div className='rotate-wrapper'>
                      <DownOutlined
                        rotate={collapsedKeyArray[i] === '1' ? 180 : 0}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        </div>
      </Space>
    </div>
  );
};
export default DummyPage3;
