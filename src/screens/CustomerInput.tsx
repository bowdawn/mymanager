import React, { FC, useState } from 'react';
import { Input, Button, Form, Radio, InputNumber } from 'antd';
import Header from 'src/components/MyHeader';
import Footer from 'src/components/MyFooter';
import { DatePickerModal } from 'src/components/CustomerInput/index';
import { ReactComponent as Checkbox } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as Calendar } from 'src/assets/icons/calendar.svg';
import Icon from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { putDesign } from 'src/lib/design/index';
import { Store } from 'antd/lib/form/interface';

const genders: Array<{ label: string; value: string }> = [
  { label: '남', value: 'M' },
  { label: '여', value: 'F' },
];

const CustomerInputScreen: FC = (props: any) => {
  let history = useHistory();
  const onFinish = async (values: Store) => {
    const parameters: {
      ['name']: string;
      ['age']: number;
      ['gender']: 'F' | 'M';
      ['birthday']: Date | null;
    } = {
      name: values.name,
      age: values.age,
      birthday: birthdate,
      gender: values.gender,
    };
    await putDesign(parameters).then(() => {
      history.push(screenPath3, values);
    });
  };
  const [form] = Form.useForm();
  const [birthdate, setBirthdate] = useState<null | Date>(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <div className='f-fd-c hp100'>
      <Header title='고객정보 입력'></Header>
      <Form
        className='custom-ant-form wp100 f1  ph16 pt24 pb10 '
        name='customer-info'
        onFinish={onFinish}
        form={form}
        initialValues={{
          name: null,
          gender: null,
          age: null,
        }}
        hideRequiredMark={true}
      >
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
                message: '이름을 입력하세요',
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
            rules={[{ required: true, message: '성별을 입력하세요' }]}
            shouldUpdate
          >
            <Radio.Group className='f'>
              {genders.map((item: any, index: number) => (
                <Radio.Button
                  className={`f1 f-jc-c f-ai-c pv21 ${
                    index === 1 ? 'ml4' : null
                  }`}
                  value={item.value}
                  key={`gender-${index}`}
                >
                  <div className='f-ai-c'>
                    <Form.Item noStyle shouldUpdate>
                      {() =>
                        form.getFieldValue('gender') === item.value ? (
                          <Checkbox className='mr6' />
                        ) : null
                      }
                    </Form.Item>
                    {item.label}
                  </div>
                </Radio.Button>
              ))}
            </Radio.Group>
          </Form.Item>
        </div>

        <Form.Item
          label='생년월일 혹은 나이 중 하나를 꼭 입력해주세요.'
          className='custom-form-label-h20 custom-form-label-mb16 '
          labelCol={{ span: 24 }}
          name={'age'}
          rules={[
            { required: true, message: '생년월일이나 나이를 입력하세요' },
          ]}
        >
          <Input.Group>
            <div className='mb16'>
              <Form.Item
                label='생년월일'
                className='custom-form-label-primary custom-form-label-mb2 custom-form-label-h18'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <div className='f f-ai-c lighten-svg-hover'>
                  <Input
                    value={
                      birthdate ? moment(birthdate).format('YYYY-MM-DD') : ''
                    }
                    className='mr8 wp100'
                    placeholder='생년월일을 선택해주세요.'
                    onClick={() => setDatePickerVisible(true)}
                  />
                  <Icon
                    className='fs24'
                    onClick={() => setDatePickerVisible(true)}
                    component={Calendar}
                  />
                </div>
              </Form.Item>
            </div>
            <div className='mb40'>
              <Form.Item
                label='보험나이'
                className='custom-form-label-primary custom-form-label-mb2 custom-form-label-h18 '
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                name='age'
              >
                <div className='f f-ai-c'>
                  <Form.Item noStyle shouldUpdate>
                    {() => (
                      <InputNumber
                        value={form.getFieldValue('age')}
                        placeholder='보험 나이를 입력해주세요.'
                        className='mr8 f1'
                        formatter={(value: string | number | undefined) => {
                          if (value || value === 0) {
                            return `${value}`;
                          } else {
                            return '';
                          }
                        }}
                        parser={(value: string | undefined) => {
                          if (value) {
                            if (parseInt(value) > 150) {
                              return 150;
                            } else if (parseInt(value) >= 0) {
                              return parseInt(value);
                            }
                          }
                          return '';
                        }}
                        min={0}
                        max={150}
                        onChange={(value: any) => {
                          setBirthdate(null);
                          form.setFieldsValue({
                            age: value,
                          });
                        }}
                      />
                    )}
                  </Form.Item>
                  <div className='fwb w24 f-jc-c'>세</div>
                </div>
              </Form.Item>
            </div>
          </Input.Group>
        </Form.Item>
        <div className='fs12 fc-pc fls60 mb12'>
          *최대 10개까지 설계가 가능합니다.
        </div>
        <div className='mb40'>
          <Form.Item className='wp100'>
            <Button
              className='wp100 h55 br4 fls80'
              type='primary'
              htmlType='submit'
            >
              다음
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Footer />
      <DatePickerModal
        date={birthdate}
        setDate={(date: Date) => {
          setBirthdate(date);
          form.setFieldsValue({
            age: Math.floor(moment().diff(moment(date), 'years', true)),
          });
        }}
        visible={datePickerVisible}
        setVisible={(value: boolean) => setDatePickerVisible(value)}
      ></DatePickerModal>
    </div>
  );
};

export default CustomerInputScreen;
