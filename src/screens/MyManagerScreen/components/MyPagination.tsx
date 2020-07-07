import React, { FC, useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import { Pagination, InputNumber } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as PaginationRightIcon } from 'src/assets/icons/pagination-right.svg';
import { ReactComponent as PaginationLeftIcon } from 'src/assets/icons/pagination-left.svg';
import { ReactComponent as PaginationFirstIcon } from 'src/assets/icons/pagination-first.svg';
import { ReactComponent as PaginationLastIcon } from 'src/assets/icons/pagination-last.svg';

interface Props {
  className?: string;
  current: number;
  setCurrent: (value: number) => void;
  total: number;
  pageSize: number;
}

const MyPagination: FC<Props> = ({
  className,
  current,
  setCurrent,
  total,
  pageSize,
}) => {
  const inputContainer = useRef<HTMLDivElement>(null);
  const customInputRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const input: any =
      inputContainer.current?.children[0].children[1].children[0];
    const updateValue = (e: any) => {
      if (e.data === '0') {
        console.log('attribute set');
        input.value = '';
      }
    };
    input.oninput = updateValue;
  });
  return (
    <div className={`f-jc-c f-ai-c ${className}`}>
      <Icon
        {...(current === 1
          ? { className: 'ant-pagination-disabled f-ai-c mr5' }
          : { className: 'f-ai-c mr5' })}
        component={() => <PaginationFirstIcon />}
        onClick={() => setCurrent(1)}
      />
      <div ref={inputContainer}>
        <Pagination
          simple
          current={current}
          onChange={(page, pageSize) => {
            if (page !== 0) {
              setCurrent(page);
            }
          }}
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
      </div>
      <Icon
        {...(current === Math.ceil(total / pageSize)
          ? { className: 'ant-pagination-disabled f-ai-c ml5' }
          : { className: 'f-ai-c ml5' })}
        component={() => <PaginationLastIcon className='f-ai-c' />}
        onClick={() => setCurrent(Math.ceil(total / pageSize))}
      />
    </div>
  );
};

export default MyPagination;
