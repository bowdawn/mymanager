import React, { FC } from 'react';
import { Carousel, Tag } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg';

const { CheckableTag } = Tag;

interface Props {
  labels: Array<string>;
  selectedChoices: Array<boolean>;
  setSelectedChoices: (value: Array<boolean>) => void;
}

const PlanTypeChoice: FC<Props> = ({
  labels,
  selectedChoices,
  setSelectedChoices,
}) => {
  return (
    <Carousel
      className='slick-prev-left0 slick-next-right0 ph16 mb40'
      arrows={true}
      prevArrow={<Icon component={ArrowLeftIcon} />}
      nextArrow={<Icon component={ArrowRightIcon} />}
      draggable={true}
      slidesPerRow={4}
      dots={false}
      infinite={false}
    >
      {labels.map((item: any, i: number) => (
        <div>
          <div className='f-jc-c ph2-5'>
            <CheckableTag
              className={
                selectedChoices[i]
                  ? 'h70 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
                  : 'h70 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
              }
              checked={selectedChoices[i]}
              onChange={(e) => {
                selectedChoices[i] = e;
                setSelectedChoices([...selectedChoices]);
              }}
            >
              {selectedChoices[i] ? <CheckboxIcon className='pt2' /> : null}
              <div
                className={selectedChoices[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'}
              >
                {item}
              </div>
            </CheckableTag>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default PlanTypeChoice;
