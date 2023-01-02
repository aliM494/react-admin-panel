import React from "react";
import { useState } from "react";
import { useEffect } from "react";



const PaginatedTable = ({ data, dataInfo, additionField, numOnPage }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let pCount = Math.ceil(data.length / numOnPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, []);

  useEffect(() => {
    let start = currentPage * numOnPage - numOnPage;
    let end = currentPage * numOnPage;

    setTableData(data.slice(start, end));
  }, [currentPage]);

  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((d) => (
              <th key={d.field}>{d.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>

        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}
              {additionField ? <th>{additionField.elemens(d.id)}</th> : null}
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item pointer">
            <span
              className={`page-link ${currentPage == 1 ? "disable" : ""}`}
              aria-label="Previous"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>

          {pages.map((p) => (
            <li key={p} className="page-item pointer">
              <span
                className={`page-link ${
                  currentPage == p ? "alert-success" : ""
                }`}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </span>
            </li>
          ))}

          <li className="page-item pointer">
            <a
              className={`page-link ${
                currentPage == pageCount ? "disable" : ""
              }`}
              aria-label="Next"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginatedTable;
