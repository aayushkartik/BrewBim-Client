import React, { useState, useMemo, useReducer } from "react";
import { Table, Switch, Radio, Button, Alert, useMultiState } from "elementz";
import faker from "faker";

export const TableProspectMaster = () => {
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
  const data = [...Array(10).keys()].map(() => ({
    listName: faker.address.timeZone(),
    fullName: faker.name.findName(),
    companyName: faker.company.companyName(),
    email: faker.internet.email(),
    // age: Math.floor(Math.random() * 50 + 18),
  }));
  const columns = {
    listName: {
      title: "List Name",
    },
    fullName: {
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

  return (
    <>
      <Table
        columns={memoizedColumns}
        data={config.empty ? [] : data}
        sortable={config.sortable}
        searchable={config.searchable}
        filterable={config.filterable}
        selectable={!config.selectable}
        paginate={!config.scrollable}
        limit={5}
        scrollable={config.scrollable ? "500px" : false}
        fixed={!config.fixed}
        loading={config.loading}
        expandable={config.expandable}
        onExpand={(row, i) => <span>Oh, You expanded me #{i}</span>}
        actionHidden
        onAction={(row, i, isBulk) => {
          if (!isBulk)
            return <Button sm simple icon="more-h" className="icon-bold" />;
          return (
            <Button.Group>
              <Button sm secondary reverse icon="pencil" />
              <Button sm danger reverse icon="close" />
            </Button.Group>
          );
        }}
        onMobile={(row, i) => (
          <div className="pt-30 pb-30 m-auto">
            <div>
              <b>List Name.</b> {row.listName}
            </div>
            <div>
              <b>Name.</b> {row.fullName}
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
    </>
  );
};
