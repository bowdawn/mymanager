import React, { FC } from 'react';
import { Typography, Space } from 'antd';
const { Title, Link } = Typography;

const NavigationPage: FC = (props: any) => {
  return (
    <div style={{ padding: 25 }}>
      <Space direction='vertical'>
        <Title level={3}>
          안녕하세요, 네이비게이션 페이지입니다, 다른 페이지로 이동하려면 링크를
          눌러주세요!
        </Title>
        <Link href={screenPath1} style={{ color: 'green' }}>
          페이지1 으로 이동 (디자인 완료)
        </Link>
        <Link href={screenPath2} style={{ color: 'green' }}>
          페이지2 으로 이동 (디자인 완료)
        </Link>
        <Link href={screenPath3} style={{ color: 'green' }}>
          페이지3 으로 이동 (디자인 완료)
        </Link>
        <Link href={screenPath4}>페이지4 으로 이동 (디자인 진행중)</Link>
      </Space>
    </div>
  );
};
export default NavigationPage;
