import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const FtxTable = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    console.log(props.data);

    const columns = [
        { id: 'asset', label: 'Asset / Contract name', align: 'center', minWidth: 20 },
        { id: 'change24hr', label: '24-Hour Change', align: 'center', minWidth: 20, format: (value) => Math.round(value * 100 * 100) / 100 + "%" },
        { id: 'bid', label: 'Bid', align: 'center', minWidth: 20 },
        {
            id: 'ask',
            label: 'Ask',
            align: 'center',
            minWidth: 20
        },
        {
            id: 'price',
            label: 'Price',
            align: 'center',
            minWidth: 20
        },
        {
            id: 'underlying_asset',
            label: 'Underlying Asset',
            align: 'center',
            minWidth: 20,
            format: (value) => value.toLocaleString('en-US')
        },
        {
            id: 'volume',
            label: 'Volume in USD for last 24 hours',
            align: 'center',
            minWidth: 20,
            format: (value) => value.toFixed(2)
        },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const percentageStyle = (change, columnId) => {
        if (columnId === "change24hr") {
            return ({ color: change === 0 ? 'grey' : change > 0 ? 'green' : 'red' })

        } else { return {} }
    }


    return (
        <Paper sx={{ width: '100%', overflow: '' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead >
                        <TableRow >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ backgroundColor: '#001E3C', color: 'white', minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}>
                                                    <div style={percentageStyle(value, column.id)}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </div>
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}


export default FtxTable



