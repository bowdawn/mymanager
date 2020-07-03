import React, { FC, useState } from 'react';
import {
  message,
  Input,
  Space,
  Button,
  Card,
  Tag,
  Divider,
  Pagination,
  Radio,
} from 'antd';
import Icon from '@ant-design/icons';
import Header from 'src/components/MyHeader';
import Footer from 'src/components/MyFooter';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search-icon.svg';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';
import { ReactComponent as PaginationRightIcon } from 'src/assets/icons/pagination-right.svg';
import { ReactComponent as PaginationLeftIcon } from 'src/assets/icons/pagination-left.svg';
import { ReactComponent as PaginationFirstIcon } from 'src/assets/icons/pagination-first.svg';
import { ReactComponent as PaginationLastIcon } from 'src/assets/icons/pagination-last.svg';
import { ReactComponent as FilterIcon } from 'src/assets/icons/filter-icon.svg';

import { useHistory } from 'react-router-dom';

const data = [
  {
    key: '1',
    name: '배정남',
    type: '신규',
    gender: '남',
    birthdate: '1973.01.01',
    sendTime: '20.05.20 / 16:32',
    applyTime: null,
    age: null,
  },
  {
    key: '2',
    name: '배정남',
    type: '신규',
    gender: '남',
    birthdate: '1973.01.01',
    sendTime: '20.05.20 / 16:32',
    applyTime: null,
    age: null,
  },
  {
    key: '3',
    name: '김정숙',
    type: '신청',
    gender: '여',
    birthdate: null,
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 50,
  },

  {
    key: '4',
    name: '김정숙',
    type: '신청',
    gender: '여',
    birthdate: null,
    sendTime: '20.05.20 / 16:32',
    applyTime: '20.01.22 / 14:30',
    age: 50,
  },
  {
    key: '5',
    name: '김정숙',
    type: '신청',
    gender: '여',
    birthdate: null,
    sendTime: '20.05.20/16:32',
    applyTime: '20.01.22/14:30',
    age: 50,
  },
];

const filters = [
  { label: '고객명', value: 'customerName' },
  { label: '보낸일자', value: 'sendDate' },
  { label: '신청일자', value: 'applyDate' },
];
function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

const MyManagerScreen: FC = (props: any) => {
  const [current, setCurrent] = useState(1);
  const total = 1500;
  const pageSize = 5;
  const [filter, setFilter] = useState('none');
  const history = useHistory();

  return (
    <div className='f-fd-c f-jc-sb hp100'>
      <Header title='마이매니저'></Header>
      <div className='f1 ph16 pt24'>
        <div className='h20 fls61 mb8'>
          간편보험설계 고객은 현재 <span className='fc-pc'>10명</span> 입니다.
        </div>

        <Input
          placeholder='고객명으로 검색하기'
          size='large'
          prefix={<SearchIcon />}
          onPressEnter={(value) => {
            if (value) {
              message.info(`Entered input value: ${value}`);
            } else {
              message.warning(`input is empty`);
            }
            message.info('input: to be implemented');
          }}
        />

        <Radio.Group
          className='f wp100 mt16 filter-radio-group'
          defaultValue='customerName'
          onChange={(e) => {
            e.stopPropagation();
            setFilter('bottom');
          }}
        >
          {filters.map((item: any) => (
            <Radio.Button
              className='f1 f-jc-c'
              value={item.value}
              onClick={() => {
                setFilter(
                  filter === 'bottom'
                    ? 'top'
                    : filter === 'top'
                    ? 'none'
                    : 'bottom'
                );
              }}
            >
              <div className='f-ai-c hp100'>
                <div className='f1'></div>
                <div>{item.label}</div>
                <div className='f1 f-jc-fe'>
                  <FilterIcon
                    {...(filter === 'none'
                      ? {}
                      : filter === 'top'
                      ? { className: 'top-active' }
                      : { className: 'bottom-active' })}
                  />
                </div>
              </div>
            </Radio.Button>
          ))}
        </Radio.Group>

        <Space className='wp100' direction='vertical' size={8}>
          {data.map((item: any) => {
            return (
              <Card
                className='ant-card-no-padding'
                hoverable
                onClick={() => {
                  message.info('card click: to be implemented');
                }}
              >
                <div className='f pv12 ph16'>
                  <div className='f1'>
                    <Space size={10}>
                      <Tag
                        className='ph10 fls6'
                        color={item.type === '신규' ? darkSkyBlue : grapefruit}
                      >
                        {item.type}
                      </Tag>
                      <div className='h30 fs16 fwb fls80 f-ai-c'>
                        {item.name}
                      </div>
                    </Space>
                  </div>
                  <div className='f1 f-jc-sb f-ai-c '>
                    <Space align='center' size={8}>
                      <Tag className='br10 ph7 bpc fc-pc'>{item.gender}</Tag>
                      <div className='h20 fs14 fls70'>
                        {(item.birthdate
                          ? [item.birthdate]
                          : [
                              '보험나이 ',
                              <span className='fwb'>{item.age}세</span>,
                            ]
                        ).map((item: any) => item)}
                      </div>
                    </Space>

                    <Icon
                      component={() => (
                        <DeleteIcon
                          className='fs24'
                          onClick={(e) => {
                            e.stopPropagation();
                            message.info('delete card: to be implemented');
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
                <Divider />
                <div className='f pv8 ph16'>
                  <div className='f1'>
                    <Space size={5}>
                      <div className='h18 fs12 fls60'>보낸일자</div>
                      <div className='h20 fs14 fls70 f-ai-c'>
                        {item.sendTime}
                      </div>
                    </Space>
                  </div>
                  <div className='f1 f-jc-fs'>
                    {item.applyTime ? (
                      <Space size={5}>
                        <div className='h18 fs12 fls60 '>신청일자</div>
                        <div className='h20 fs14 fls70 fc-pc f-ai-c'>
                          {item.applyTime}
                        </div>
                      </Space>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
        </Space>

        <div className='f-jc-c f-ai-c p24'>
          <Icon
            {...(current === 1
              ? { className: 'ant-pagination-disabled f-ai-c mr5' }
              : { className: 'f-ai-c mr5' })}
            component={() => <PaginationFirstIcon />}
            onClick={() => setCurrent(1)}
          />

          <Pagination
            simple
            current={current}
            onChange={(page, pageSize) => setCurrent(page)}
            pageSize={pageSize}
            total={total}
            itemRender={(page, type, originalElement) => {
              if (type === 'prev') {
                return <Icon className='fs38' component={PaginationLeftIcon} />;
              }
              if (type === 'next') {
                return (
                  <Icon className='fs38' component={PaginationRightIcon} />
                );
              }
              return originalElement;
            }}
          />
          <Icon
            {...(current === Math.floor(total / pageSize)
              ? { className: 'ant-pagination-disabled f-ai-c ml5' }
              : { className: 'f-ai-c ml5' })}
            component={() => <PaginationLastIcon className='f-ai-c' />}
            onClick={() => setCurrent(Math.floor(total / pageSize))}
          />
        </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default MyManagerScreen;
