import React, { useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
// import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "./ReadTable.css";
import { getAllProducts } from "../../APIServices/APIServices";

import GlobalFilter from "./GlobalFilter.jsx";
import Checkbox from "./Checkbox.jsx";

const ReadTable = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => {
      setItems(data);
    });
  }, []);

  console.log("items", items);

  return "hello";
  // const columns = useMemo(() => COLUMNS, []);

  // const {
  //   getTableProps,
  //   headerGroups,
  //   getTableBodyProps,
  //   prepareRow,
  //   state,
  //   setGlobalFilter,
  //   page,
  //   nextPage,
  //   previousPage,
  //   canPreviousPage,
  //   canNextPage,
  //   pageCount,
  //   gotoPage,
  //   setPageSize,
  // } = useTable(
  //   {
  //     columns,
  //     items,
  //     initialState: { pageSize: 20 },
  //   },
  //   useGlobalFilter,
  //   useFilters,
  //   useSortBy,
  //   usePagination,
  //   useRowSelect,
  //   (hooks) => {
  //     hooks.visibleColumns.push((columns) => [
  //       {
  //         id: "selection",
  //         Header: ({ getToggleAllPageRowsSelectedProps }) => (
  //           <Checkbox {...getToggleAllPageRowsSelectedProps()} />
  //         ),
  //         Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
  //       },
  //       ...columns,
  //     ]);
  //   }
  // );

  // // const { globalFilter, pageIndex, pageSize, selectedRowIds } = state;

  // return (
  //   <>
  //     <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
  //     <table {...getTableProps()}>
  //       <thead>
  //         {headerGroups.map((headerGroup) => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map((column) => (
  //               <th {...column.getHeaderProps()}>
  //                 {column.render("Header")}
  //                 <div>{column.canFilter ? column.render("Filter") : null}</div>
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {page.map((row, i) => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map((cell) => {
  //                 return (
  //                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
  //                 );
  //               })}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //     <div style={{ marginTop: "30px" }}>
  //       <span style={{ textAlign: "left", marginRight: "7px" }}>
  //         Page {pageIndex + 1} of {pageCount}'s
  //       </span>
  //       <span style={{ textAlign: "left", marginRight: "30px" }}>
  //         | Go to page:{" "}
  //         <input
  //           type="number"
  //           min={1}
  //           defaultValue={pageIndex + 1}
  //           onChange={(e) => {
  //             const pageNumber = e.target.value
  //               ? Number(e.target.value) - 1
  //               : 0;
  //             gotoPage(pageNumber);
  //           }}
  //         />
  //       </span>
  //       <select
  //         value={pageSize}
  //         onChange={(e) => setPageSize(Number(e.target.value))}
  //       >
  //         {[20, 30, 50].map((pagesize) => (
  //           <option key={pagesize} value={pagesize}>
  //             Show {pagesize}
  //           </option>
  //         ))}
  //       </select>

  //       <button
  //         style={{ marginRight: "7px" }}
  //         onClick={() => gotoPage(0)}
  //         disabled={!canPreviousPage}
  //       >
  //         {"<<"}
  //       </button>
  //       <button
  //         style={{ marginRight: "12px" }}
  //         onClick={previousPage}
  //         disabled={!canPreviousPage}
  //       >
  //         Previous Page
  //       </button>
  //       <button onClick={nextPage} disabled={!canNextPage}>
  //         Next Page
  //       </button>
  //       <button
  //         style={{ marginLeft: "7px" }}
  //         onClick={() => gotoPage(pageCount - 1)}
  //         disabled={!canNextPage}
  //       >
  //         {">>"}
  //       </button>
  //     </div>
  //     <pre style={{ textAlign: "left" }}>
  //       <code>
  //         {JSON.stringify(
  //           {
  //             selectedRowIds,
  //           },
  //           null,
  //           2
  //         )}
  //       </code>
  //     </pre>
  //   </>
  // );
};

export default ReadTable;
