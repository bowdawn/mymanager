interface ChoiceLayout {
  className?: string;
  labels: Array<string>;
  values: Array<string>;
  icons?: Array<any>;
  extraLabels?: Array<string>;
  disabledValues?: Array<boolean>;
  selectedChoices: Array<string>;
  setSelectedChoices: (value: Array<string>) => void;
  card: FunctionComponent<CheckableCardType>;
  columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 20 | 24 | 25 | 50 | 100;
  type: 'grid' | 'carousel';
  maxCheckableOptions?: number;
}
