import React, { FC, useState } from 'react';
import { Button, Empty } from 'antd';
import CustomHeader from 'src/components/MyHeader';
import CustomFooter from 'src/components/MyFooter';
import {
  CustomInput,
  CustomFilter,
  CustomerCard,
  CustomPagination,
} from 'src/screens/MyManagerScreen/components/index';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const data: Array<{
  name: string;
  type: string;
  gender: string;
  birthdate?: string | null;
  sendTime: string;
  applyTime?: string | null;
  age?: number | null;
}> = [
  {
    name: '티머시',
    type: '신규',
    gender: '남',
    birthdate: '1963.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '오복단',
    type: '신규',
    gender: '남',
    birthdate: '1997.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '사만다',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 32,
  },

  {
    name: '에밀리',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 13,
  },
  {
    name: '이사벨라',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20/16:32',
    applyTime: '20.01.22/14:30',
    age: 80,
  },
  {
    name: '윌리엄',
    type: '신규',
    gender: '남',
    birthdate: '1993.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '니콜라스',
    type: '신규',
    gender: '남',
    birthdate: '1995.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '올리비아',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 40,
  },

  {
    name: '매디슨',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 45,
  },
  {
    name: '제임스',
    type: '신규',
    gender: '남',
    birthdate: '1983.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '매슈',
    type: '신규',
    gender: '남',
    birthdate: '1985.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '안젤리나',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 37,
  },

  {
    name: '데이브',
    type: '신규',
    gender: '남',
    birthdate: '1981.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '앤드류',
    type: '신규',
    gender: '남',
    birthdate: '1986.01.01',
    sendTime: '20.05.20 / 16:32',
  },
  {
    name: '그레이스',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 29,
  },

  {
    name: '제인',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 15,
  },
  {
    name: '한나',
    type: '신청',
    gender: '여',
    sendTime: '20.05.20/16:32',
    applyTime: '20.01.22/14:30',
    age: 65,
  },
];

const MyManagerScreen: FC = (props: any) => {
  const history = useHistory();
  const [customers, setCustomers] = useState(data);
  const [current, setCurrent] = useState(1);
  const pageSize = 5;

  return (
    <div className='f-fd-c f-jc-sb hp100'>
      <CustomHeader title='마이매니저' />
      <div className='f1 f-fd-c ph16 pt24'>
        <div className='h20 fls61 mb8'>
          간편보험설계 고객은 현재
          <span className='fc-pc'>&nbsp;{customers.length}명</span> 입니다.
        </div>

        <CustomInput />
        <CustomFilter className='mb16' />

        {customers.map((item: any, index: number) => {
          if (index < pageSize * current && index >= pageSize * (current - 1)) {
            return (
              <CustomerCard
                deleteCard={() => {
                  customers.splice(index, 1);
                  setCustomers([...customers]);
                }}
                onClick={() =>
                  history.push(screenPath3, {
                    ...item,
                    age: item.age
                      ? item.age
                      : Math.floor(
                          moment().diff(moment(item.birthdate), 'years', true)
                        ),
                  })
                }
                className='mb10'
                name={item.name}
                birthdate={item.birthdate}
                age={item.age}
                gender={item.gender}
                type={item.type}
                sendTime={item.sendTime}
                applyTime={item.applyTime}
                key={`customer-card-${index}`}
              />
            );
          } else {
            return null;
          }
        })}
        {customers.length === 0 ? (
          <Empty
            className='f1 f-jc-c f-ai-c f-fd-c'
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : null}
      </div>
      {customers.length > 0 ? (
        <CustomPagination
          className='p16'
          current={current}
          setCurrent={(value: number) => setCurrent(value)}
          pageSize={pageSize}
          total={customers.length}
        />
      ) : null}

      <div className='f-jc-c'>
        <Button
          type='primary'
          size='large'
          className='mt6 br4 mb50 h55 fs18 fwb fls80 w328'
          onClick={() => history.push(screenPath2)}
        >
          설계 시작하기
        </Button>
      </div>
      <CustomFooter />
    </div>
  );
};

export default MyManagerScreen;
