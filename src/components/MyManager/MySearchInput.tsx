import React, { FC, useState } from 'react';
import { message, Input } from 'antd';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search-icon.svg';

interface Props {
  className?: string;
}

const MySearchInput: FC<Props> = (props: any) => {
  const [keyword, setKeyword] = useState('');

  const onSearch = () => {
    if (keyword) {
      message.info(`Entered input value: ${keyword}`);
    } else {
      message.warning(`input is empty`);
    }
    message.info('input: to be implemented');
  };

  return (
    <Input
      className={`h40 ${props.className}`}
      placeholder='고객명으로 검색하기'
      value={keyword}
      prefix={<SearchIcon onClick={() => onSearch()} />}
      onPressEnter={(v) => onSearch()}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default MySearchInput;
