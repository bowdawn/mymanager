import React, { FC, useState } from 'react';
import {
  message,
  Input,
  Button,
  Typography,
  Form,
  Row,
  Col,
  Radio,
  DatePicker,
  InputNumber,
} from 'antd';
import Header from 'src/components/header';

const DummyPage2: FC = (props: any) => {
  const onFinish = async (values: any) => {
    const { name, gender, birthdate, age } = values;
    console.log(values);
    message.success('Validation Success');
    message.info('On Next: to be implemented');
  };

  const onFinishFailed = (info: any) => {
    const { values, errorFields, outOfDate } = info;
    errorFields.forEach((item: any) => {
      message.error({
        content: item.errors,
      });
    });
  };

  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log(changedValues, allValues);
    setAgeRequired(
      form.getFieldValue('birthdate') === null ||
        form.getFieldValue('birthdate') === undefined
    );
    setBirthdateRequired(
      form.getFieldValue('age') === null ||
        form.getFieldValue('age') === undefined ||
        form.getFieldValue('age') === NaN
    );
  };

  const onFieldsChange = (changedFields: any, allFields: Array<any>) => {
    console.log(changedFields, allFields);
  };

  const [form] = Form.useForm();
  const [ageRequired, setAgeRequired] = useState(true);
  const [birthdateRequired, setBirthdateRequired] = useState(true);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Header title='고객정보 입력'></Header>

      <Form
        style={{ width: '100%', flex: 1, display: 'flex' }}
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={(changedValues, allValues) =>
          onValuesChange(changedValues, allValues)
        }
        onFieldsChange={(changedFields, allFields) => {
          onFieldsChange(changedFields, allFields);
        }}
        form={form}
        initialValues={{
          name: null,
          gender: null,
          birthdateOrAge: null,
          birthdate: null,
          age: null,
        }}
      >
        <div
          style={{
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Form.Item
              label='성명'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
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
              label='성별'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name='gender'
              rules={[{ required: true, message: 'Please input your gender!' }]}
            >
              <Radio.Group style={{ display: 'flex' }} buttonStyle='solid'>
                <Radio.Button style={{ flex: 1 }} value='a'>
                  남
                </Radio.Button>
                <Radio.Button style={{ flex: 1 }} value='b'>
                  여
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label='생년월일 혹은 나이 중 하나를 꼭 입력해주세요.'
              labelCol={{ span: 24 }}
              name={
                birthdateRequired && ageRequired
                  ? 'fail'
                  : birthdateRequired
                  ? 'birthdate'
                  : 'age'
              }
              rules={[{ required: true, message: 'Enter birthdate or age' }]}
            >
              <Input.Group>
                <Form.Item
                  shouldUpdate
                  label='생년월일'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  name='birthdate'
                  rules={[
                    {
                      type: 'object',
                      message: 'The input is not valid input',
                    },
                  ]}
                >
                  <DatePicker
                    disabled={!birthdateRequired}
                    style={{ width: '100%' }}
                  />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 24 }}
                  label='보험나이'
                  wrapperCol={{ span: 24 }}
                  name='age'
                  rules={[
                    {
                      type: 'number',
                      message: 'The input is not valid input',
                    },
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    disabled={!ageRequired}
                    className='ant-input-number-input-text-align-right'
                    formatter={(value) => {
                      if (value) {
                        return `${value}세`;
                      } else {
                        return '세';
                      }
                    }}
                    parser={(value: string | undefined) => {
                      let result: '' | number = '';
                      if (value) {
                        result = parseInt(value.replace('세', ''));
                      }
                      return result;
                    }}
                    min={0}
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
          </div>
          <Form.Item>
            <Row justify='center'>
              <Col>
                <Button type='primary' htmlType='submit'>
                  다음
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default DummyPage2;
