import React from "react";
import clsx from "clsx";
import { PaginLogic } from "../../utils/pagination";
import { users, headers } from "../../utils/constants";
import { useTable } from "../../utils/useTable";
import TableModal from "../../utils/tableModal";
import "./Table.css";

const Table = () => {
  const [
    modifiedArray,
    searchItem,
    toggleSort,
    toggle,
    editItem,
    deleteItem,
  ] = useTable(users);

  const [currArray, numsArray, selectPage] = PaginLogic(modifiedArray, 7);

  return (
    <>
      <ul className="table-nums-list ">
        {numsArray.map((_, num) => (
          <li key={num}>
            <button className="btn-num" onClick={() => selectPage(num)}>
              {num + 1}
            </button>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="search by name"
          onChange={(e) => searchItem(e.target.value)}
        />
      </form>

      {!currArray.length ? (
        <h2> Sorry, name not found =( </h2>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {headers.map((headline) => (
                <th
                  key={headline.propName}
                  className="th-headline"
                  onClick={() => toggleSort(headline.propName)}
                >
                  {headline.isSortable ? (
                    <span className={clsx(`thead-arrow`, toggle && `active`)}>
                      {headline.propName}
                      {/* <a >s</a>  */}
                    </span>
                  ) : (
                    <span>...</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currArray.map((user) => {
              const { key, name, surname, age } = user;
              return (
                <tr key={key}>
                  <td> {name} </td>
                  <td> {surname} </td>
                  <td> {age} </td>
                  <TableModal
                    props={user}
                    deleteItem={deleteItem}
                    editItem={editItem}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
