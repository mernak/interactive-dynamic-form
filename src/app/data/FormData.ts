import {IControlData} from '../interface/IControlData';

export const FormData =  [
  {
    controlName: 'Name',
    controlType: 'text',
    valueType: 'text',
    dependents: ['Gender'],
    order: 1,
    placeholder: 'enter name',
    validators: {
      required: true
    }
  },
  {
    controlName: 'Age',
    placeholder: 'Enter Age',
    valueType: 'number',
    controlType: 'text',
    dependents: ['Email'],
    order: 2,
    validators: {
      required: true
    }
  },
  {
    controlName: 'Email',
    valueType: 'email',
    placeholder: 'Enter email',
    controlType: 'text',
    order: 3,
    validators: {
      required: false
    }
  },
  {
    controlName: 'Type',
    placeholder: 'Select Type',
    controlType: 'radio',
    dependents: ['Email'],
    order: 4,
    options: [{
      optionName: 'Type A',
      value: 'A'
    }, {
      optionName: 'Type B',
      value: 'B'
    }],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Gender',
    placeholder: 'Select gender',
    controlType: 'select',
    dependents: ['Age', 'Books'],
    order: 5,
    options: [{
      optionName: 'Male',
      value: 'male'
    }, {
      optionName: 'Female',
      value: 'female'
    }],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Books',
    placeholder: 'Select favorite book',
    controlType: 'select',
    dependents: ['Username'],
    order: 6,
    options: [{
      optionName: 'The fault in our stars',
      value: '1',
      dependentKey: 'A'
    }, {
      optionName: 'Harry Potter',
      value: '2',
      dependentKey: 'B'
    }],
    validators: {
      required: false
    }
  },
  {
    controlName: 'Movies',
    placeholder: 'Select favorite movie',
    controlType: 'select',
    order: 7,
    options: [{
      optionName: 'Movie A',
      value: 'movie A',
      dependentKey: 'A'
    }, {
      optionName: 'Movie B',
      value: 'movie B',
      dependentKey: 'B'
    },
      {
        optionName: 'Movie C',
        value: 'movie C',
        dependentKey: 'B'
      }],
    validators: {
      required: false
    }
  }

].sort((a, b) => a.order - b.order);



