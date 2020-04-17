export interface IControlData {
  controlName: string;
  controlType: string;
  placeholder?: string;
  dependents?: string[];
  order?: number;
  value?: any;
  DependentKey?: any;
  options?: Array<{
    optionName: string;
    value: string;
    dependentKey?: any;
  }>;
  validators?: {
    required?: boolean;
  };
}
