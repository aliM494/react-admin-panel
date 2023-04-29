import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SpinnerLoad from "./SpinnerLoad";

const PaginatedTable = ({
  children,
  data,
  dataInfo,
  additionField,
  numOnPage,
  searchParams,
  loading,
}) => {
  const [initData, setInitData] = useState([data]);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOnPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let start = currentPage * numOnPage - numOnPage;
    let end = currentPage * numOnPage;

    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(
      data.filter((d) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar, data]);

  return (
    <>
      {/* //#endregion Search Section */}
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e) => setSearchChar(e.target.value)}
            />
            <span className="input-group-text">{searchParams.title}</span>
          </div>
        </div>

        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>
      {/* //Table Section */}
      {loading ? (
        <SpinnerLoad colorClass={"text-primary"} />
      ) : data.length ? (
        <table className="table table-responsive text-center table-hover table-bordered">
          <thead className="table-secondary">
            <tr>
              {dataInfo.map((d) => (
                <th key={d.field}>{d.title}</th>
              ))}

              {additionField
                ? additionField.map((a, index) => (
                    <th key={a.id + "__" + index}>{a.title}</th>
                  ))
                : null}
            </tr>
          </thead>

          <tbody>
            {tableData.map((d) => (
              <tr key={d.id}>
                {dataInfo.map((i) => (
                  <td key={i.field + "_" + d.id}>{d[i.field]}</td>
                ))}
                {additionField
                  ? additionField.map((a, index) => (
                      <td key={a.id + "___" + index}>{a.elements(d)}</td>
                    ))
                  : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center my-5 text-danger">
          چیزی برای نمایش وجود ندارد
        </h5>
      )}

      {/* //Navigation Section */}
      {loading ? null : pages.length > 1 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination dir_ltr">
            <li className="page-item pointer">
              <span
                className={`page-link ${currentPage === 1 ? "disable" : ""}`}
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
                    currentPage === p ? "alert-success" : ""
                  }`}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </span>
              </li>
            ))}

            <li className="page-item pointer">
              <span
                className={`page-link ${
                  currentPage === pageCount ? "disable" : ""
                }`}
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default PaginatedTable;
