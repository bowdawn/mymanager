import React, { FC } from 'react';
import 'src/assets/less/components/footer.less';

const Footer: FC<any> = () => {
  return (
    <div className='f-fd-c f-jc-fe my-footer ph16 pb5 pt45 pb16'>
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
