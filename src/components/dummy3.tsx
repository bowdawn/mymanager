import React, { FC } from 'react';
import Header from 'src/components/header';
import { message, Space, Row, Col, Radio, Tabs, Carousel } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

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

const DummyPage3: FC = (props: any) => {
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
      <div
        style={{
          paddingRight: 25,
          paddingLeft: 25,
          paddingTop: 0,
          paddingBottom: 25,
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
          <Row justify='start'>
            <Col>카드 뉴스</Col>
          </Row>
          <Tabs
            defaultActiveKey='1'
            tabPosition={'top'}
            style={{ height: 220 }}
          >
            {tabs.map((item: any, i: number) => (
              <TabPane tab={item.title} key={i}>
                <Carousel autoplay>
                  {item.cards.map((item: any) => (
                    <div>{item.content}</div>
                  ))}
                </Carousel>
              </TabPane>
            ))}
          </Tabs>
        </Space>
      </div>
    </div>
  );
};
export default DummyPage3;
