import {useState} from 'react';

export const useTable = (props) => {

  const [stateArr, setStateArr] = useState(props);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState('');

  const toggleSort = (propName) => {

    setToggle(!toggle);

    const sortStr = (prop) => {
      const toggleSortStr = (arr, k) => arr.sort((a,b) => k * (a[prop].toUpperCase() > b[prop].toUpperCase() ? 1 : -1));
      return setStateArr(toggle ? toggleSortStr(stateArr, 1) : toggleSortStr(stateArr, -1));
    };

    const sortNum = (prop) => {
      const toggleSortNum = (arr, k) => arr.sort((a,b) => k * (a[prop] - b[prop]));
      return setStateArr(toggle ? toggleSortNum(stateArr, 1) : toggleSortNum(stateArr, -1));
    };

    switch (propName) {
      case 'name':
        return sortStr('name');
        
      case 'surname':
        return sortStr('surname');

      case 'age':
        return sortNum('age');

      default:
        break;
    }
  };

  const editItem = (stateVal) => {

    for (let idx = 0; idx < stateArr.length; idx++) {

      if (stateArr[idx].key === stateVal.key) {
        const arrBefore = stateArr.slice(0, idx);
        const arrAfter = stateArr.slice(idx + 1);
        setStateArr([...arrBefore, stateVal, ...arrAfter]);
        break;
      }

    }
  };

  const deleteItem = (key) => setStateArr(stateArr.filter(item => item.key !== key));

  const searchItem = (eventValue) => setSearch(eventValue);
  
  const filteredItems = stateArr.filter(user => user.name.toUpperCase().includes(search.toUpperCase()));
  
  return [filteredItems, searchItem, toggleSort, toggle, editItem, deleteItem];
}
