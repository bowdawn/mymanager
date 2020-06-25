import React, { FC, useState } from 'react';
import { Typography, Space } from 'antd';
import DatePicker from 'react-mobile-datepicker';
import 'src/assets/components/datepicker.less';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const { Title, Link } = Typography;

const DummyPage: FC = (props: any) => {
  const [time, setTime] = useState(new Date(2000, 1, 1));
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ padding: 25 }}>
      <Space direction='vertical'>
        <Title level={3}>
          안녕하세요, 네이비게이션 페이지입니다, 다른 페이지로 이동하려면 링크를
          눌러주세요!
        </Title>
        <Link href='/dummypage1' style={{ color: 'green' }}>
          페이지1 으로 이동 (디자인 완료)
        </Link>
        <Link href='/dummypage2'>페이지2 으로 이동 (디자인 진행중)</Link>
        <Link href='/dummypage3'>페이지3 으로 이동 (디자인 진행중)</Link>
        <Link href='/dummypage4'>페이지4 으로 이동 (디자인 진행중)</Link>
      </Space>

      <DatePicker
        value={time}
        isOpen={isOpen}
        onSelect={(time: Date) => {
          setTime(time);
          setIsOpen(false);
        }}
        onCancel={() => setIsOpen(false)}
        confirmText='설정'
        cancelText='취소'
        headerFormat={`YYYY년 MM월 DD일 ${moment(time).format('dddd')}`}
        onChange={(time: Date) => setTime(time)}
        min={new Date(1980, 1, 1)}
        max={new Date()}
        theme='android'
        isPopup={false}
      />
    </div>
  );
};
export default DummyPage;
