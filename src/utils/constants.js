import Randomizer from 'react-randomizer';

export const optionTypeList  = ['Text', "Checkbox", "Radio", "Description"];

export const headers = [
  {
    propName: 'name',
    propType: 'string',
    isSortable: true,
    isSearchable: true,
    label: 'Name'
  },
  {
    propName: 'surname',
    propType: 'string',
    isSortable: true,
    isSearchable: true,
    label: 'Surname'
  },
  {
    propName: 'age',
    propType: 'number',
    isSortable: true,
    isSearchable: true,
    label: 'Age'
  },
  {
    propName: 'func',
    propType: 'func',
    isSortable: false,
    isSearchable: true,
    label: '< EditOutlined />'
  },
];

export const users = Randomizer.randomizeArray([
  {key: 0, name: 'Ivan', surname: 'Serg', age: 22 },
  {key: 1, name: 'Alex', surname: 'Ivan', age: 25 },
  {key: 2, name: 'Fedor', surname: 'Long', age: 20 },
  {key: 3, name: 'Serg', surname: 'Bill', age: 35 },
  {key: 4, name: 'aIvan', surname: 'lSerg', age: 23 },
  {key: 5, name: 'sAlex', surname: 'kIvan', age: 24 },
  {key: 6, name: 'dFedor', surname: 'jLong', age: 25 },
  {key: 7, name: 'fSerg', surname: 'hBill', age: 39 },
  {key: 8, name: 'gIvan', surname: 'gSerg', age: 21 },
  {key: 9, name: 'hAlex', surname: 'dIvan', age: 12 },
  {key: 10, name: 'jFedor', surname: 'aLong', age: 15 },
  {key: 11, name: 'kSerg', surname: 'sBill', age: 66 },
  {key: 12, name: 'Ivan', surname: 'Serg', age: 22 },
  {key: 13, name: 'Alex', surname: 'Ivan', age: 25 },
  {key: 14, name: 'Fedor', surname: 'Long', age: 20 },
  {key: 15, name: 'Serg', surname: 'Bill', age: 35 },
  {key: 16, name: 'aIvan', surname: 'lSerg', age: 23 },
  {key: 17, name: 'sAlex', surname: 'kIvan', age: 24 },
  {key: 18, name: 'dFedor', surname: 'jLong', age: 25 },
  {key: 19, name: 'fSerg', surname: 'hBill', age: 39 },
  {key: 20, name: 'gIvan', surname: 'gSerg', age: 21 },
  {key: 21, name: 'hAlex', surname: 'dIvan', age: 9 },
  {key: 22, name: 'jFedor', surname: 'aLong', age: 15 },
  {key: 23, name: 'kSerg', surname: 'sBill', age: 66 },
  {key: 24, name: 'Ivan', surname: 'Serg', age: 22 },
  {key: 25, name: 'Alex', surname: 'Ivan', age: 25 },
  {key: 26, name: 'Fedor', surname: 'Long', age: 20 },
  {key: 27, name: 'Serg', surname: 'Bill', age: 35 },
  {key: 28, name: 'aIvan', surname: 'lSerg', age: 23 },
  {key: 29, name: 'sAlex', surname: 'kIvan', age: 24 },
  {key: 30, name: 'dFedor', surname: 'jLong', age: 25 },
  {key: 31, name: 'fSerg', surname: 'hBill', age: 39 },
  {key: 32, name: 'gIvan', surname: 'gSerg', age: 21 },
  {key: 33, name: 'hAlex', surname: 'dIvan', age: 12 },
  {key: 34, name: 'jFedor', surname: 'aLong', age: 15 },
  {key: 35, name: 'kSerg', surname: 'sBill', age: 66 },
]);
