import React, { FC } from 'react';
import { message, Tabs, Carousel } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as PrevArrow } from 'src/assets/icons/carousel-arrow-left.svg';
import { ReactComponent as NextArrow } from 'src/assets/icons/carousel-arrow-right.svg';
import img from 'src/assets/images/card.jpg';
import { tabs } from 'src/assets/constants/index';
const { TabPane } = Tabs;

//To-do integrate tabs as props
interface Props {
  className?: string;
}
const NewsCardCarousel: FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Tabs defaultActiveKey='0' tabPosition={'top'} tabBarGutter={0}>
        {tabs.map((item: any, i: number) => (
          <TabPane tab={<div className='w78 f-jc-c'>{item.title}</div>} key={i}>
            <Carousel
              className='slick-prev-left16 slick-next-right16 '
              arrows={true}
              prevArrow={<Icon component={PrevArrow} />}
              nextArrow={<Icon component={NextArrow} />}
              draggable={true}
              appendDots={(dots) => <div className='custom-dots'>{dots}</div>}
            >
              {item.cards.map((item: any, j: number) => (
                <div
                  key={`card${i}-${j}`}
                  onClick={() =>
                    message.info(
                      'selected card news on click: to be implemented'
                    )
                  }
                >
                  <div className='f-jc-c f-ai-c fc-pc fu fls70 '>
                    {item.img ? (
                      <img className='wp100' src={img} />
                    ) : (
                      <div className='hp100'>{item.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </Carousel>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default NewsCardCarousel;
