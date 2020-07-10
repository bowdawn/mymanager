import React, { FC } from 'react';
import { Row, Col, Carousel } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg';

const ChoiceLayout: FC<ChoiceLayout> = ({
  className,
  labels,
  selectedChoices,
  setSelectedChoices,
  card: Card,
  columns,
  icons = labels.map((item: any) => null),
  extraLabels = labels.map((item: any) => ''),
  disabledValues = labels.map((item: any) => false),
  type,
}) => {
  let ColProps = getColProps(columns);

  if (type === 'grid') {
    return (
      <Row className={`${className}`} gutter={[7, 7]}>
        {labels.map((item: any, i: number) => (
          <Col {...ColProps}>
            <Card
              label={item}
              extraLabel={extraLabels[i]}
              checked={selectedChoices[i]}
              disabled={disabledValues[i]}
              icon={icons[i]}
              onChange={(e: boolean) => {
                selectedChoices[i] = e;
                setSelectedChoices([...selectedChoices]);
              }}
            />
          </Col>
        ))}
      </Row>
    );
  } else if (type === 'carousel') {
    return (
      <Carousel
        className='slick-prev-left0 slick-next-right0 ph16 mb40'
        arrows={true}
        prevArrow={<Icon component={ArrowLeftIcon} />}
        nextArrow={<Icon component={ArrowRightIcon} />}
        draggable={true}
        slidesPerRow={columns}
        dots={false}
        infinite={false}
      >
        {labels.map((item: any, i: number) => (
          <div>
            <div className='f-jc-c ph2-5'>
              <Card
                label={item}
                checked={selectedChoices[i]}
                onChange={(e: boolean) => {
                  selectedChoices[i] = e;
                  setSelectedChoices([...selectedChoices]);
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
  return null;
};
export default ChoiceLayout;

const getColProps = (columns: number) => {
  let ColProps;
  if (100 / columns === Math.floor(100 / columns)) {
    ColProps = {
      className: `wp${100 / columns}`,
    };
  }
  if (24 / columns === Math.floor(24 / columns)) {
    ColProps = {
      span: 24 / columns,
    };
  }
  return ColProps;
};
