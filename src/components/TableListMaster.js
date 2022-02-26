import React, { useState, useMemo, useReducer } from "react";
import { Table, Switch, Radio, Button, Alert, useMultiState } from "elementz";
import faker from "faker";

export const TableListMaster = () => {
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
  //   const tempIndex = Math.floor(Math.random() * 2)
  let ans = ["In progress", "Completed"];
  const [selected, setSelected] = useState([]);

  const data = [...Array(10).keys()].map(() => ({
    listName: faker.address.timeZone(),
    scanStatus: ans[Math.floor(Math.random() * 2)],
    noOfEmails: Math.floor(Math.random() * 50 + 18) + " emails",
  }));
  const columns = {
    listName: {
      title: "List Name",
    },
    scanStatus: {
      title: "Scan Status",
    },
    noOfEmails: {
      title: "Number of emails",
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
              <b>Scan Status.</b> {row.scanStatus}
            </div>
            <div>
              <b>Number of emails.</b> {row.noOfEmails}
            </div>
          </div>
        )}
      />
    </>
  );
};
