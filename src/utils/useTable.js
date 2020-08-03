import {useState} from 'react';

export const useTable = (props) => {

  const [stateArr, setStateArr] = useState(props);
  const [toggle, setToggle] = useState({toReverse: false});
  const [search, setSearch] = useState('');

  const toggleSort = (propName) => {

    setToggle({toReverse: !toggle.toReverse});

    const sortName = (prop) => {
      const toggleSortName = (arr, k) => arr.sort((a,b) => k * (a[prop].toUpperCase() > b[prop].toUpperCase() ? 1 : -1));
      return setStateArr(toggle.toReverse ? toggleSortName(stateArr, 1) : toggleSortName(stateArr, -1));
    };

    const sortNum = (prop) => {
      const toggleSortNum = (arr, k) => arr.sort((a,b) => k * (a[prop] - b[prop]));
      return setStateArr(toggle.toReverse ? toggleSortNum(stateArr, 1) : toggleSortNum(stateArr, -1));
    };

    switch (propName) {
      case 'name':
        return sortName('name');
        
      case 'surname':
        return sortName('surname');

      case 'age':
        return sortNum('age');

      default:
        break;
    }
  };

  const filter = (eventValue) => setSearch(eventValue);
  
  const filteredUsers = stateArr.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  return [filteredUsers, filter, toggleSort];
}
