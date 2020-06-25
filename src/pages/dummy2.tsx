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
import './dummy2.less';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';

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
        className='custom-ant-form wp100 f1 f'
        name='customer-info'
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
        hideRequiredMark={true}
      >
        <div className='ph16 pv24 f-fd-c f-jc-sb f-ai-c'>
          <div>
            <Form.Item
              label='*성명'
              className='custom-form-label-h20 custom-form-label-mb2'
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
              label='*성별'
              className='custom-form-label-h20 custom-form-label-mb16'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name='gender'
              rules={[{ required: true, message: 'Please input your gender!' }]}
              shouldUpdate
            >
              <Radio.Group
                className='f'
                onChange={(e) =>
                  form.setFieldsValue({ ['gender']: e.target.value })
                }
              >
                <Radio.Button className='f1 f-jc-c  f-ai-c pv21' value='a'>
                  <div className='f-ai-c'>
                    <Form.Item noStyle shouldUpdate>
                      {() =>
                        form.getFieldValue('gender') === 'a' ? (
                          <Checkbox className='mr6' />
                        ) : (
                          ''
                        )
                      }
                    </Form.Item>
                    남
                  </div>
                </Radio.Button>
                <Radio.Button className='f1 ml4 f-jc-c f-ai-c pv21' value='b'>
                  <div className='f-ai-c'>
                    <Form.Item noStyle shouldUpdate>
                      {() =>
                        form.getFieldValue('gender') === 'b' ? (
                          <Checkbox className='mr6' />
                        ) : (
                          ''
                        )
                      }
                    </Form.Item>
                    여
                  </div>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label='생년월일 혹은 나이 중 하나를 꼭 입력해주세요.'
              className='custom-form-label-h20 custom-form-label-mb16'
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
