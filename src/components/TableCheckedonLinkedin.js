// import "./styles.css";
// import React, { useState, useMemo } from "react";
// import { Table, useMultiState } from "elementz";
import faker from "faker";

// export function Test() {
//   const [config, setConfig] = useMultiState({
//     rows: 10000,
//     scrollable: false,
//     expandable: false,
//     searchable: true,
//     filterable: true,
//     sortable: true,
//     selectable: true,
//     fixed: true,
//     empty: false,
//     loading: false,
//   });
//   const [selected, setSelected] = useState([]);

//   const data = [...Array(10).keys()].map(() => ({
//     first: faker.name.firstName(),
//     last: faker.name.lastName(),
//     phone: faker.phone.phoneNumber(),
//     age: Math.floor(Math.random() * 50 + 18),
//   }));
//   const columns = {
//     first: {
//       title: "First Name",
//     },
//     last: {
//       title: "Last Name",
//     },
//     phone: {
//       title: "Phone",
//     },
//     age: {
//       title: "Age",
//       filter: {
//         //Custom filter options
//         options: {
//           "Older than 30": (age) => age > 30,
//           "Between 18 and 25": (age) => age >= 18 && age <= 25,
//         },
//       },
//     },
//   };

//   const memoizedData = useMemo(() => data, []);
//   const memoizedColumns = useMemo(() => columns, []);

//   return (
//     <Table
//       data={memoizedData}
//       columns={memoizedColumns}
//       // selected={selected}
//       // onSelectChange={(rows, selected) => {
//       //   console.log(rows);
//       //   setSelected(selected);
//       // }}
//       onRowClick={(row, i) => {
//         const rowIndex = row.__ez__.index,
//           isNotSelected = selected.indexOf(rowIndex) === -1;

//         const updateSelected = isNotSelected
//           ? [...selected, rowIndex]
//           : [
//               ...selected.slice(0, selected.indexOf(rowIndex)),
//               ...selected.slice(
//                 selected.indexOf(rowIndex) + 1,
//                 selected.length
//               ),
//             ];

//         return setSelected(updateSelected);
//       }}
//     />
//   );
// }

import React, { useEffect, useState, useMemo, useReducer } from "react";
import { Table, Switch, Radio, Button, Alert, useMultiState } from "elementz";
import { CSVLink } from "react-csv";
import Loading from "./Loading";

export const TableCheckedonLinkedin = () => {
  const [config, setConfig] = useMultiState({
    rows: 10000,
    scrollable: false,
    expandable: false,
    searchable: true,
    filterable: true,
    sortable: true,
    selectable: true,
    fixed: true,
    empty: false,
    loading: false,
  });
  const [selected, setSelected] = useState([]);
  const [csvSelected, setCsvSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState([]);

  var headers = [
    { label: "Name", key: "name" },
    { label: "Company Name", key: "companyName" },
    { label: "Email", key: "email" },
  ];
  const fetchCheckEmail = () => {
    setLoading(true);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://70b34c93-c1e7-496f-8056-b0e5fe927322.mock.pstmn.io/checkedonLL`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const data = result.map((item) => {
          const { name, companyName, email } = item;

          return {
            name,
            companyName,
            email,
          };
        });
        // var { credit } = result;
        setCheckEmail(data);
        // console.log(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchCheckEmail();
  }, [setCheckEmail]);

  const columns = {
    name: {
      title: "Name",
    },
    companyName: {
      title: "Company Name",
    },
    email: {
      title: "Email",
    },
  };

  const memoizedColumns = useMemo(() => columns, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container flex flex-column">
        {checkEmail.length !== 0 ? (
          <CSVLink data={checkEmail} headers={headers}>
            <button type="button" className="btn btn-success float-right m-3">
              Export Data
            </button>
          </CSVLink>
        ) : null}
        <Table
          columns={memoizedColumns}
          data={config.empty ? [] : checkEmail}
          sortable={config.sortable}
          searchable={config.searchable}
          filterable={config.filterable}
          selectable={config.selectable}
          paginate={!config.scrollable}
          limit={5}
          scrollable={config.scrollable ? "500px" : false}
          fixed={!config.fixed}
          loading={config.loading}
          expandable={config.expandable}
          onExpand={(row, i) => <span>Oh, You expanded me #{i}</span>}
          actionHidden
          selected={selected}
          onSelectChange={(rows, selected) => {
            // console.log(rows);
            setCsvSelected(rows);
            setSelected(selected);
          }}
          onRowClick={(row, i) => {
            const rowIndex = row.__ez__.index,
              isNotSelected = selected.indexOf(rowIndex) === -1;

            const updateSelectedDemo = isNotSelected
              ? [...selected, rowIndex]
              : [
                  ...selected.slice(0, selected.indexOf(rowIndex)),
                  ...selected.slice(
                    selected.indexOf(rowIndex) + 1,
                    selected.length
                  ),
                ];
            const dataCSV = updateSelectedDemo.map((item) => {
              const { name, companyName, email } = item;

              return {
                name,
                companyName,
                email,
              };
            });
            // console.log(dataCSV);
            return setSelected(dataCSV);
          }}
          onAction={(row, i, isBulk) => {
            if (!isBulk)
              return <Button sm simple icon="more-h" className="icon-bold" />;
            return (
              <Button.Group>
                <CSVLink data={csvSelected} headers={headers}>
                  <Button
                    sm
                    secondary
                    reverse
                    icon="download"
                    // onClick={(e) => {
                    //   // console.log(e);
                    // }}
                  />
                </CSVLink>

                <Button
                  sm
                  danger
                  reverse
                  icon="close"
                  onClick={(e) => {
                    setSelected([]);
                    // console.log(e);
                  }}
                />
              </Button.Group>
            );
          }}
          onMobile={(row, i) => (
            <div className="pt-30 pb-30 m-auto">
              <div>
                <b>Name.</b> {row.name}
              </div>
              <div>
                <b>Company Name.</b> {row.companyName}
              </div>
              <div>
                <b>Email.</b> {row.email}
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
};
