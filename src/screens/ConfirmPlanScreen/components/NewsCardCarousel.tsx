import React, { FC } from 'react';
import { message, Tabs, Carousel } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as PrevArrow } from 'src/assets/icons/carousel-arrow-left.svg';
import { ReactComponent as NextArrow } from 'src/assets/icons/carousel-arrow-right.svg';
import img from 'src/assets/images/card.jpg';

const { TabPane } = Tabs;

const tabs = [
  {
    title: '3대질병',
    cards: [
      { content: '', img: true },
      { content: '카드를 선택하세요' },
      { content: '다른 카드를 선택하세요' },
    ],
  },
  {
    title: '4대질병',
    cards: [
      { content: '4대질병 카드를 선택하세요' },
      { content: '', img: true },
      { content: '다른 4대질병 카드를 선택하세요' },
    ],
  },
  {
    title: '운전자보험',
    cards: [
      { content: '운전자보험 카드를 선택하세요' },
      { content: '다른 운전자보험 카드를 선택하세요 ' },
      { content: '', img: true },
    ],
  },
  {
    title: '암보혐',
    cards: [
      { content: '', img: true },
      { content: '암보혐 카드를 선택하세요' },
      { content: '다른 암보혐 카드를 선택하세요' },
    ],
  },
  {
    title: '실손보험',
    cards: [
      { content: '실손보험 카드를 선택하세요' },
      { content: '다른 실손보험 카드를 선택하세요' },
      { content: '', img: true },
    ],
  },
];

interface Props {}
const NewsCardCarousel: FC<Props> = (props: any) => {
  return (
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
                  message.info('selected card news on click: to be implemented')
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
  );
};
export default NewsCardCarousel;
