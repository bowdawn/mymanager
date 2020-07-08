import React, { FC, useState } from 'react';
import { Carousel, Tag } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as CheckboxIcon } from 'src/assets/icons/checkbox.svg';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg';
import { productTypes } from 'src/assets/constants/index';

const { CheckableTag } = Tag;
const ProductTypeChoice: FC = (props: any) => {
  const [selectedProductedTypes, setSelectedProductTypes] = useState([
    ...productTypes.map((item: any) => false),
  ]);

  return (
    <Carousel
      className='slick-prev-left0 slick-next-right0 ph16  mb40'
      arrows={true}
      prevArrow={<Icon component={ArrowLeftIcon} />}
      nextArrow={<Icon component={ArrowRightIcon} />}
      draggable={true}
      slidesPerRow={4}
      dots={false}
      infinite={false}
    >
      {productTypes.map((item: any, i: number) => (
        <div>
          <div className='f-jc-c ph2-5'>
            <CheckableTag
              className={
                selectedProductedTypes[i]
                  ? 'h70 wp100 br4 f-fd-c f-jc-sb f-ai-c pv8'
                  : 'h70 wp100 br4 f-fd-c f-jc-c f-ai-c pv8'
              }
              checked={selectedProductedTypes[i]}
              onChange={(e) => {
                selectedProductedTypes[i] = e;
                setSelectedProductTypes([...selectedProductedTypes]);
              }}
            >
              {selectedProductedTypes[i] ? (
                <CheckboxIcon className='pt2' />
              ) : null}
              <div
                className={
                  selectedProductedTypes[i] ? 'fs14 fls7 fwb' : 'fs14 fls7'
                }
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
export default ProductTypeChoice;
