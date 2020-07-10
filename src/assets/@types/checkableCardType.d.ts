export interface CheckableCardType {
  label: string;
  extraLabel?: string;
  disabled?: boolean;
  icon?: any;
  checked: boolean;
  onChange: (value: boolean) => void;
}
