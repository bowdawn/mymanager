import React, { FC, useState } from 'react';
import { Pagination } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as PaginationRightIcon } from 'src/assets/icons/pagination-right.svg';
import { ReactComponent as PaginationLeftIcon } from 'src/assets/icons/pagination-left.svg';
import { ReactComponent as PaginationFirstIcon } from 'src/assets/icons/pagination-first.svg';
import { ReactComponent as PaginationLastIcon } from 'src/assets/icons/pagination-last.svg';

interface Props {
  className?: string;
}

const MyPagination: FC<Props> = (props: any) => {
  const [current, setCurrent] = useState(1);
  const total = 100;
  const pageSize = 5;

  return (
    <div className='f-jc-c f-ai-c p16'>
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
            return <Icon className='fs38' component={PaginationRightIcon} />;
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
  );
};

export default MyPagination;
