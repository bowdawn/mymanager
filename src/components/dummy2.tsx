import React, { FC } from 'react';
import {
  message,
  Input,
  Space,
  Button,
  Card,
  Tag,
  Typography,
  Form,
  Row,
  Col,
  Radio,
  DatePicker,
  InputNumber,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Header from 'src/components/header';
const { Title, Text } = Typography;

const DummyPage2: FC = (props: any) => {
  const onFinish = async (values: any) => {
    const { name, gender, date, age } = values;
    console.log(values);
    if (date === undefined && age === undefined) {
      message.error('Validation Failure');
    } else {
      message.success('Validation Success');
    }
  };

  const onFinishFailed = (info: any) => {
    const { values, errorFields, outOfDate } = info;
    errorFields.forEach((item: any) => {
      message.error({
        content: item.errors,
      });
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Header title='고객정보 입력'></Header>
      <div
        style={{
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='성명'
            labelCol={{ span: 24 }}
            name='name'
            rules={[
              {
                type: 'string',
                message: 'The input is not valid input',
              },
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input placeholder='이름을 입력해주세요' />
          </Form.Item>

          <Form.Item
            label='성병'
            labelCol={{ span: 24 }}
            name='gender'
            rules={[{ required: true, message: 'Please input your gender!' }]}
          >
            <Radio.Group buttonStyle='solid'>
              <Radio.Button value='a'>남</Radio.Button>
              <Radio.Button value='b'>여</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label='hi'
            rules={[
              {
                type: 'object',
                required: true,
                message: 'Please select time!',
              },
            ]}
          >
            <Form.Item
              label='생년월일'
              labelCol={{ span: 24 }}
              name='birthdate'
            >
              <DatePicker />
            </Form.Item>

            <Form.Item label='보험나이'>
              <Form.Item name='age' noStyle>
                <InputNumber min={0} />
              </Form.Item>
              <span className='ant-form-text'> 세</span>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Row justify='center'>
              <Col>
                <Button type='primary' htmlType='submit'>
                  다음
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DummyPage2;
