import React, { FC, useState, useEffect } from 'react';
import Header from 'src/components/MyHeader';
import Footer from 'src/components/MyFooter';
import { Button } from 'antd';
import { ReactComponent as ResetIcon } from 'src/assets/icons/reset.svg';
import {
  planTypes,
  productTypes,
  companies,
  pricePlans,
  quickSetup,
  expirationOptions,
} from 'src/assets/constants/index';

import {
  CollapsibleLayout,
  CheckableCard,
  ExpiryCard,
  ChoiceLayout,
  QuickCard,
  PricePlanCard,
} from 'src/screens/AddPlanScreen/components/index';
import { RouteComponentProps } from 'react-router-dom';
import { searchPlan } from 'src/lib/plan/index';

interface Props extends RouteComponentProps {
  name: string;
  age: string;
  gender: string;
}
const AddPlanScreen: FC<Props> = ({ name, age, gender, history }) => {
  const [selectedQuickPlans, setSelectedQuickPlans] = useState([
    ...quickSetup.map((item: any) => false),
  ]);
  const [selectedProductedTypes, setSelectedProductTypes] = useState([
    ...productTypes.map((item: any) => false),
  ]);
  const [selectedPlanTypes, setSelectedPlanTypes] = useState([
    ...planTypes.map((item: any) => false),
  ]);
  const [selectedCompanies, setSelectedCompanies] = useState([
    ...companies.map((item: any) => false),
  ]);
  const [selectedExpirations, setSelectedExpirations] = useState([
    ...expirationOptions.map((item: any) => false),
  ]);
  const [selectedPricePlans, setSelectedPricePlans] = useState([
    ...pricePlans.map((item: any) => false),
  ]);

  const getCheckedOptions = (selected: Array<boolean>) =>
    selected.reduce(
      (count: number, item: boolean) => count + (item ? 1 : 0),
      0
    );
  const [options, setOptions] = useState({
    companies: [],
    products: [],
    plans: [],
    expirations: [],
    types: [],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await searchPlan({ Age: age, Gender: gender }).catch(
        (error) => {
          console.error(error);
        }
      );
      if (response) {
        console.log(response);
        setOptions(response);
      }
    };
    fetchData();
  }, []);

  const [rotate, setRotate] = useState(false);
  return (
    <div>
      <Header title='빠른 설계' subHeader={{ name: name, age: age }} />
      <CollapsibleLayout
        title='빠른 설계'
        collapsedBody={
          <ChoiceLayout
            className='p16 bc-wt'
            columns={5}
            labels={quickSetup.map((item: any) => item.label)}
            icons={quickSetup.map((item: any) => item.icon)}
            selectedChoices={selectedQuickPlans}
            setSelectedChoices={setSelectedQuickPlans}
            card={QuickCard}
            type='grid'
            maxCheckableOptions={Infinity}
          />
        }
      />

      <div className='ph16 pt40'>
        <div className='fs12 fls60 fwb mb10 '>성품군 선택</div>
        <ChoiceLayout
          columns={4}
          card={CheckableCard}
          labels={productTypes.map((item: any) => item.label)}
          disabledValues={productTypes.map((item: any) =>
            options.products.every((option: string) => option !== item.value)
          )}
          selectedChoices={selectedProductedTypes}
          setSelectedChoices={setSelectedProductTypes}
          type='carousel'
        />
        <div className='fs12 fls60 fwb mb10 '>플랜선택</div>
        <ChoiceLayout
          columns={4}
          card={CheckableCard}
          labels={planTypes}
          selectedChoices={selectedPlanTypes}
          setSelectedChoices={setSelectedPlanTypes}
          type='carousel'
        />
        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 '>회사 선택</div>
          <ChoiceLayout
            columns={5}
            labels={companies}
            selectedChoices={selectedCompanies}
            setSelectedChoices={setSelectedCompanies}
            card={CheckableCard}
            type='grid'
            maxCheckableOptions={
              getCheckedOptions(selectedExpirations) > 1 ||
              getCheckedOptions(selectedPricePlans) > 1
                ? 1
                : Infinity
            }
          />
        </div>

        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 '>만기선택</div>
          <ChoiceLayout
            columns={3}
            labels={expirationOptions.map((item: any) => item.label)}
            extraLabels={expirationOptions.map((item: any) => item.expiry)}
            disabledValues={expirationOptions.map((item: any) => item.disabled)}
            selectedChoices={selectedExpirations}
            setSelectedChoices={setSelectedExpirations}
            card={ExpiryCard}
            type='grid'
            maxCheckableOptions={
              getCheckedOptions(selectedCompanies) > 1 ? 1 : Infinity
            }
          />
        </div>

        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 '>가격종류</div>
          <ChoiceLayout
            columns={2}
            labels={pricePlans.map((item: any) => item.label)}
            disabledValues={pricePlans.map((item: any) => item.disabled)}
            selectedChoices={selectedPricePlans}
            setSelectedChoices={setSelectedPricePlans}
            card={PricePlanCard}
            icons={pricePlans.map((item: any) => item.icon)}
            type='grid'
            maxCheckableOptions={
              getCheckedOptions(selectedCompanies) > 1 ? 1 : Infinity
            }
          />
        </div>

        <div className='f f-ai-c h55 mb50'>
          <Button
            className={rotate ? 'hp100 mr8 br4 rot-360' : 'hp100 mr8 br4'}
            onAnimationEnd={() => setRotate(false)}
            onClick={() => {
              setRotate(true);
              setSelectedQuickPlans([...quickSetup.map((item: any) => false)]);
              setSelectedProductTypes([
                ...productTypes.map((item: any) => false),
              ]);
              setSelectedPlanTypes([...planTypes.map((item: any) => false)]);
              setSelectedCompanies([...companies.map((item: any) => false)]);
              setSelectedExpirations([
                ...expirationOptions.map((item: any) => false),
              ]);
              setSelectedPricePlans([...pricePlans.map((item: any) => false)]);
            }}
          >
            <ResetIcon />
          </Button>

          <Button
            type='primary'
            className='f1 fls8 fs18 fwb hp100 br4'
            onClick={() => history.push}
          >
            간편 보험료 설계
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AddPlanScreen;
