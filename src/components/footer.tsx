import React, { FC, ReactHTMLElement } from 'react';
import { message, PageHeader } from 'antd';
import { ReactComponent as ArrowLeft } from 'src/assets/icons/arrow-left.svg';
import Icon from '@ant-design/icons';
import 'src/assets/components/footer.less';

const Footer: FC<any> = (props: {
  title: string;
  subTitle: ReactHTMLElement<HTMLElement>;
}) => {
  const { title, subTitle } = props;

  return (
    <div className='f-fd-c f-jc-fe my-footer ph16 pb5 pt45'>
      <div>
        <div>
          주소 (04778) 서울특별시 강서구 마곡중앙로 757 두산더랜드 파크 c동
          506호 | 전화 070-7750-0843
        </div>
        <div>Copyright © my. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
