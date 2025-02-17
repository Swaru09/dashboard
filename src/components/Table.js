import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns }) => {
  return <DataGrid rows={rows} columns={columns} />;
};

export default Table;
