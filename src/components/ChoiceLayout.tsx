import React, { FC } from 'react';
import { Row, Col, Carousel, message } from 'antd';
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
  values = labels.map((item: any) => item),
  type,
  maxCheckableOptions = 1,
}) => {
  let ColProps = getColProps(columns);

  let newOptionSelectable = selectedChoices.length < maxCheckableOptions;

  const onChangeIndex = (checked: boolean, index: number) => {
    if (maxCheckableOptions === 1) {
      if (checked) {
        setSelectedChoices([values[index]]);
      } else {
        setSelectedChoices([]);
      }
    } else if (newOptionSelectable) {
      if (checked) {
        selectedChoices.push(values[index]);
        setSelectedChoices([...selectedChoices]);
      } else {
        selectedChoices = selectedChoices.filter(
          (choice: string) => choice != values[index]
        );
        setSelectedChoices([...selectedChoices]);
      }
    } else {
      //to do write an error message if needed
    }
  };

  if (type === 'grid') {
    return (
      <Row className={`${className}`} gutter={[7, 7]}>
        {labels.map((item: any, i: number) => (
          <Col {...ColProps}>
            <Card
              label={item}
              extraLabel={extraLabels[i]}
              checked={selectedChoices.some(
                (choice: any) => choice === values[i]
              )}
              disabled={disabledValues[i]}
              icon={icons[i]}
              onChange={(e: boolean) => {
                onChangeIndex(e, i);
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
                checked={selectedChoices.some(
                  (choice: any) => choice === values[i]
                )}
                extraLabel={extraLabels[i]}
                onChange={(checked: boolean) => {
                  onChangeIndex(checked, i);
                }}
                icon={icons[i]}
                disabled={disabledValues[i]}
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
