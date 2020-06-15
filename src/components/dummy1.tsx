import React, { FC } from 'react';
import { message, Input, Space, Button, Card, Tag, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

const data = [
  {
    key: '1',
    name: '김백호',
    type: '신규',
    gender: '남',
    birthdate: '1980.11.11',
    sendTime: '20.01.20/16:00',
    applyTime: null,
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: '김백호',
    type: '신규',
    gender: '남',
    birthdate: '1980.11.11',
    sendTime: '20.01.20/16:00',
    applyTime: null,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: '김백호',
    type: '신청',
    gender: '남',
    birthdate: '1980.11.11',
    sendTime: '20.01.20/16:00',
    applyTime: '20.01.22/14:30',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: '김백호',
    type: '신청',
    gender: '남',
    birthdate: '1980.11.11',
    sendTime: '20.01.20/16:00',
    applyTime: '20.01.22/14:30',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: '김백호',
    type: '신청',
    gender: '남',
    birthdate: '1980.11.11',
    sendTime: '20.01.20/16:00',
    applyTime: '20.01.22/14:30',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '6',
    name: '김백호',
    type: '신청',
    gender: '남',
    birthdate: '1980.11.11',
    sendTime: '20.01.20/16:00',
    applyTime: '20.01.22/14:30',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

const DummyPage1: FC = (props: any) => {
  return (
    <div
      style={{
        padding: '25px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Space style={{ width: '100%' }} direction='vertical' size={8}>
        <Input.Search
          placeholder='고객명으로 검색하기'
          size='large'
          onSearch={(value) => console.log(value)}
          style={{ width: '100%' }}
        />
        <div style={{ width: '100%', display: 'flex' }}>
          <Button style={{ flex: 1, marginRight: 8 }}>고객명</Button>
          <Button style={{ flex: 1, marginRight: 8 }}>보낸일자</Button>
          <Button style={{ flex: 1 }}>신청일자</Button>
        </div>
        {data.map((item: any) => {
          return (
            <Card hoverable style={{ width: '100%', color: '#adeacd' }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flex: 1,
                  }}
                >
                  <Space align='center' size={0}>
                    <Tag color='#37bd7d'>{item.type}</Tag>
                    <Title level={4} style={{ color: '#37bd7d' }}>
                      {item.name}
                    </Title>
                  </Space>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Space align='center' size={0}>
                    <Tag
                      style={{
                        color: '#37bd7d',
                        borderColor: '#37bd7d',
                        backgroundColor: '#37bd7d16',
                      }}
                    >
                      {item.gender}
                    </Tag>
                    {item.birthdate}
                  </Space>
                  <DeleteOutlined
                    onClick={() => {
                      message.info('to be implemented');
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flex: 1,
                  }}
                >
                  보낸일자: {item.sendTime}
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Text strong>신청일자: {item.applyTime}</Text>
                </div>
              </div>
            </Card>
          );
        })}
      </Space>
      <Button
        type='primary'
        size='large'
        style={{ width: '50%', marginTop: 25 }}
      >
        설계 시작하고
      </Button>
    </div>
  );
};

export default DummyPage1;
