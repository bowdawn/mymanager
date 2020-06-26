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
import Footer from 'src/components/footer';
import DatePickerModal from 'src/components/DatePickerModal';
import './dummy2.less';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as Calendar } from 'src/assets/icons/calendar.svg';
import Icon from '@ant-design/icons';
import moment from 'moment';

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
  };

  const onFieldsChange = (changedFields: any, allFields: Array<any>) => {
    console.log(changedFields, allFields);
  };

  const [form] = Form.useForm();

  const [birthdate, setBirthdate] = useState<null | Date>(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

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
          age: null,
        }}
        hideRequiredMark={true}
      >
        <div className='ph16 pt24 pb10 f-fd-c f-jc-sb f-ai-c'>
          <div>
            <div className='mb40'>
              <Form.Item
                label='*성명'
                className='custom-form-label-h20 custom-form-label-mb2'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                name='name'
                rules={[
                  {
                    type: 'string',
                    message: '잘못 된 입력입니다',
                  },
                  {
                    required: true,
                    message: '잘못 된 입력입니다',
                  },
                ]}
              >
                <Input placeholder='이름을 입력해주세요' />
              </Form.Item>
            </div>
            <div className='mb40'>
              <Form.Item
                label='*성별'
                className='custom-form-label-h20 custom-form-label-mb16'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                name='gender'
                rules={[{ required: true, message: '잘못 된 입력입니다' }]}
                shouldUpdate
              >
                <Radio.Group className='f'>
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
            </div>
            <div className='mb40'>
              <Form.Item
                label='생년월일 혹은 나이 중 하나를 꼭 입력해주세요.'
                className='custom-form-label-h20 custom-form-label-mb16 '
                labelCol={{ span: 24 }}
                name={'age'}
                rules={[{ required: true, message: '잘못 된 입력입니다' }]}
              >
                <Input.Group>
                  <div className='mb16'>
                    <Form.Item
                      shouldUpdate
                      label='생년월일'
                      className='custom-form-label-primary custom-form-label-mb2 custom-form-label-h18'
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <div className='f f-ai-c lighten-svg-hover'>
                        <Input
                          value={
                            birthdate
                              ? moment(birthdate).format('YYYY-MM-DD')
                              : ''
                          }
                          className='mr8'
                          placeholder='생년월일을 선택해주세요.'
                          onClick={() => setDatePickerVisible(true)}
                          style={{ width: '100%' }}
                        />
                        <Icon
                          onClick={() => setDatePickerVisible(true)}
                          component={() => <Calendar />}
                        />
                      </div>
                    </Form.Item>
                  </div>

                  <Form.Item
                    labelCol={{ span: 24 }}
                    label='보험나이'
                    className='custom-form-label-primary custom-form-label-mb2 custom-form-label-h18 '
                    wrapperCol={{ span: 24 }}
                    name='age'
                  >
                    <div className='f f-ai-c'>
                      <Form.Item noStyle shouldUpdate>
                        {() => (
                          <InputNumber
                            style={{ width: '100%' }}
                            value={form.getFieldValue('age')}
                            placeholder='보험 나이를 입력해주세요.'
                            className='mr8'
                            formatter={(value) => {
                              if (value) {
                                return `${value}`;
                              } else {
                                return '';
                              }
                            }}
                            parser={(value: string | undefined) => {
                              let result: '' | number = '';
                              if (value) {
                                result = parseInt(value);
                                if (result > 150) {
                                  result = 150;
                                }
                              }
                              return result;
                            }}
                            min={0}
                            max={150}
                          />
                        )}
                      </Form.Item>
                      <div className='fwb w24 f-jc-c'>세</div>
                    </div>
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </div>
            <div className='fs12 fcpc fls6 mb12'>
              *최대 10개까지 설계가 가능합니다.
            </div>
            <div className='mb40'>
              <Form.Item className='wp100'>
                <Button
                  className='wp100 h55 br4 fls8 '
                  type='primary'
                  htmlType='submit'
                >
                  다음
                </Button>
              </Form.Item>
            </div>
          </div>
        </div>
        <DatePickerModal
          date={birthdate}
          setDate={(date: Date) => {
            setBirthdate(date);
            console.log('setDate');
            form.setFieldsValue({ age: 3 });
            console.log(form.getFieldValue('age'));
          }}
          visible={datePickerVisible}
          setVisible={(value: boolean) => setDatePickerVisible(value)}
        ></DatePickerModal>
      </Form>
      <Footer className='f1' />
    </div>
  );
};

export default DummyPage2;
