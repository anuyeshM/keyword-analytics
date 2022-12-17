import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="center">{props.columnNames[0]}</TableCell>
            <TableCell align="center">{props.columnNames[1]}</TableCell>
            <TableCell align="center">{props.columnNames[2]}</TableCell>
            <TableCell align="center">{props.columnNames[3]}</TableCell>
            <TableCell align="center">{props.columnNames[4]}</TableCell>
            <TableCell align="center">{props.columnNames[5]}</TableCell>
            <TableCell align="center">{props.columnNames[7]}</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.raw_broadmatch_data.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row[0]}</TableCell>
              <TableCell align="center">{row[1]}</TableCell>
              <TableCell align="center">{row[2]}</TableCell>
              <TableCell align="center">{row[3]}</TableCell>
              <TableCell align="center">{row[4]}</TableCell>
              <TableCell align="center">{row[5]}</TableCell>
              <TableCell align="center">{row[7]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}