import React, { FC, useRef, useLayoutEffect } from 'react';
import { Pagination } from 'antd';
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
  minPageShowEndButtons: number;
  minPageVisible: number;
}

const MyPagination: FC<Props> = ({
  className,
  current,
  setCurrent,
  total,
  pageSize,
  minPageShowEndButtons,
  minPageVisible,
}) => {
  const inputContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const input: any =
      inputContainer.current?.children[0].children[1].children[0];
    if (input) {
      const updateValue = (e: { data: string }) => {
        if (e.data === '0') {
          input.value = '';
        }
      };
      input.oninput = updateValue;
    }
  });

  const totalPages = Math.ceil(total / pageSize);
  if (totalPages < current) {
    setCurrent(totalPages);
  }
  return totalPages >= minPageVisible ? (
    <div className={`f-jc-c f-ai-c ${className}`}>
      {totalPages >= minPageShowEndButtons ? (
        <Icon
          {...(current === 1
            ? { className: 'ant-pagination-disabled f-ai-c mr5' }
            : { className: 'f-ai-c mr5' })}
          component={() => <PaginationFirstIcon />}
          onClick={() => setCurrent(1)}
        />
      ) : null}

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
      {totalPages >= minPageShowEndButtons ? (
        <Icon
          {...(current === totalPages
            ? { className: 'ant-pagination-disabled f-ai-c ml5' }
            : { className: 'f-ai-c ml5' })}
          component={() => <PaginationLastIcon className='f-ai-c' />}
          onClick={() => setCurrent(totalPages)}
        />
      ) : null}
    </div>
  ) : null;
};

export default MyPagination;
