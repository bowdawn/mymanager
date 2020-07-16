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
  const [selectedQuickPlans, setSelectedQuickPlans] = useState<Array<string>>(
    []
  );
  const [selectedProductTypes, setSelectedProductTypes] = useState<
    Array<string>
  >([]);
  const [selectedPlanTypes, setSelectedPlanTypes] = useState<Array<string>>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<Array<string>>([]);
  const [selectedExpirations, setSelectedExpirations] = useState<Array<string>>(
    []
  );
  const [selectedPricePlans, setSelectedPricePlans] = useState<Array<string>>(
    []
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
    const params = {
      Age: age,
      Gender: gender,
      product: selectedProductTypes,
      plan: selectedPlanTypes,
      company: selectedCompanies,
      expiration: selectedExpirations,
      type: selectedExpirations,
    };

    searchPlan(params)
      .then((res) => {
        console.log(res);
        setOptions(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [
    selectedProductTypes,
    selectedPlanTypes,
    selectedCompanies,
    selectedExpirations,
    selectedPricePlans,
  ]);

  const quickSet = (
    products: Array<string>,
    plans: Array<string>,
    companies: Array<string>,
    expirations: Array<string>,
    types: Array<string>
  ) => {
    setSelectedProductTypes(products);
    setSelectedPlanTypes(plans);
    setSelectedCompanies(companies);
    setSelectedExpirations(expirations);
    setSelectedPricePlans(types);
  };

  useEffect(() => {
    if (selectedQuickPlans.length) {
      switch (selectedQuickPlans[0]) {
        case '종합':
          quickSet(['10'], ['10'], [], ['2'], ['1']);
          break;
        case '4대질병':
          quickSet(['10'], ['20'], [], ['2'], ['1']);
          break;
        case '3대질병':
          quickSet(['10'], ['30'], [], ['2'], ['1']);
          break;
        case '2대질병':
          quickSet(['10'], ['40'], [], ['2'], ['1']);
          break;
        case '암플랜':
          quickSet(['10'], ['50'], [], ['2'], ['1']);
          break;
        case '수술/입원':
          quickSet(['10'], ['60'], [], ['2'], ['1']);
          break;
        case '간병인':
          quickSet(['10'], ['70'], [], ['2'], ['1']);
          break;
        case '어린이':
          quickSet(['40'], ['10'], [], ['4'], ['1']);
          break;
        case '실손':
          quickSet(['50'], ['10'], [], ['4'], ['1']);
          break;
        case '간편실손':
          quickSet(['60'], ['10'], [], ['4'], ['1']);
          break;
        case '치매':
          quickSet(['70'], ['10'], [], ['3'], ['1']);
          break;
        case '치아':
          quickSet(['80'], ['10'], [], ['0'], ['1']);
          break;
        case '운전자':
          quickSet(['90'], ['10'], [], ['5'], ['1']);
          break;
      }
    } else {
      quickSet([], [], [], [], []);
    }
  }, [selectedQuickPlans]);

  const [rotate, setRotate] = useState(false);
  return (
    <div className='f-fd-c hp100'>
      <Header title='빠른 설계' subHeader={{ name: name, age: age }} />
      <CollapsibleLayout
        title='빠른 설계'
        collapsedBody={
          <ChoiceLayout
            className='p16 bc-wt'
            columns={5}
            labels={quickSetup.map((item: any) => item.label)}
            values={quickSetup.map((item: any) => item.label)}
            icons={quickSetup.map((item: any) => item.icon)}
            selectedChoices={selectedQuickPlans}
            setSelectedChoices={setSelectedQuickPlans}
            card={QuickCard}
            type='grid'
            maxCheckableOptions={1}
          />
        }
      />

      <div className='ph16 pt40'>
        <div className='fs12 fls60 fwb mb10 fc-pc'>
          *상품군 또는 플랜을 선택해주세요.
        </div>
        <div className='fs12 fls60 fwb mb10 '>성품군 선택</div>
        <ChoiceLayout
          columns={4}
          card={CheckableCard}
          labels={productTypes.map((item: any) => item.label)}
          values={productTypes.map((item: any) => item.value)}
          disabledValues={productTypes.map(
            (item: any) =>
              !options.products.find((option: string) => option === item.value)
          )}
          selectedChoices={selectedProductTypes}
          setSelectedChoices={setSelectedProductTypes}
          type='carousel'
        />
        <div className='fs12 fls60 fwb mb10 '>플랜선택</div>
        <ChoiceLayout
          columns={4}
          card={CheckableCard}
          labels={planTypes.map((item: any) => item.label)}
          values={planTypes.map((item: any) => item.value)}
          disabledValues={planTypes.map(
            (item: any) =>
              !options.plans.find((option: string) => option === item.value)
          )}
          selectedChoices={selectedPlanTypes}
          setSelectedChoices={setSelectedPlanTypes}
          type='carousel'
        />
        {selectedPlanTypes.length > 0 || selectedProductTypes.length > 0 ? (
          <div>
            <div className='mb40'>
              <div className='fs12 fls60 fwb mb10 '>회사 선택</div>
              <ChoiceLayout
                columns={5}
                labels={companies
                  .filter((item: any) =>
                    options.companies.some(
                      (companyCode: string) => item.value === companyCode
                    )
                  )
                  .map((company: any) => company.label)}
                values={companies
                  .filter((item: any) =>
                    options.companies.some(
                      (companyCode: string) => item.value === companyCode
                    )
                  )
                  .map((company: any) => company.value)}
                selectedChoices={selectedCompanies}
                setSelectedChoices={setSelectedCompanies}
                card={CheckableCard}
                type='grid'
                maxCheckableOptions={
                  selectedExpirations.length > 1 ||
                  selectedPricePlans.length > 1
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
                values={expirationOptions.map((item: any) => item.value)}
                extraLabels={expirationOptions.map((item: any) => item.expiry)}
                disabledValues={expirationOptions.map(
                  (item: any) =>
                    !options.expirations.find(
                      (option: string) => option === item.value
                    )
                )}
                selectedChoices={selectedExpirations}
                setSelectedChoices={setSelectedExpirations}
                card={ExpiryCard}
                type='grid'
                maxCheckableOptions={
                  selectedCompanies.length > 1 ? 1 : Infinity
                }
              />
            </div>

            <div className='mb40'>
              <div className='fs12 fls60 fwb mb10 '>가격종류</div>
              <ChoiceLayout
                columns={2}
                labels={pricePlans.map((item: any) => item.label)}
                values={pricePlans.map((item: any) => item.value)}
                disabledValues={pricePlans.map(
                  (item: any) =>
                    !options.types.find(
                      (option: string) => option === item.value
                    )
                )}
                selectedChoices={selectedPricePlans}
                setSelectedChoices={setSelectedPricePlans}
                card={PricePlanCard}
                icons={pricePlans.map((item: any) => item.icon)}
                type='grid'
                maxCheckableOptions={
                  selectedCompanies.length > 1 ? 1 : Infinity
                }
              />
            </div>

            <div className='f f-ai-c h55 mb50'>
              <Button
                className={rotate ? 'hp100 mr8 br4 rot-360' : 'hp100 mr8 br4'}
                onAnimationEnd={() => setRotate(false)}
                onClick={() => {
                  setRotate(true);
                  setSelectedQuickPlans([]);
                  setSelectedProductTypes([]);
                  setSelectedPlanTypes([]);
                  setSelectedCompanies([]);
                  setSelectedExpirations([]);
                  setSelectedPricePlans([]);
                }}
              >
                <ResetIcon />
              </Button>

              <Button
                type='primary'
                className='f1 fls8 fs18 fwb hp100 br4'
                onClick={() => history.push}
                disabled={
                  !(
                    selectedProductTypes.length &&
                    selectedPlanTypes.length &&
                    selectedCompanies.length &&
                    selectedExpirations.length &&
                    selectedPricePlans.length
                  )
                }
              >
                간편 보험료 설계
              </Button>
            </div>
          </div>
        ) : null}
      </div>
      <div className='f1' />
      <Footer />
    </div>
  );
};
export default AddPlanScreen;
