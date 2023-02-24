import { Checkbox, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../styles/Home/Home.module.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function Home() {

    const jsonRowData = [
        { name: 'Adjustment', status: 'active' }, { name: 'Extend Mnt', status: 'active' }, { name: 'Grave Site', status: 'active' },
        { name: 'Marker Fee', status: 'active' }, { name: 'Open/Close', status: 'active' }, { name: 'Payment Plan', status: 'inactive' }
    ]

    const [data, setData] = useState(jsonRowData);

    const handleEdit = () => {
        alert("edit")
    }

    const handleDelete = (evt, e) => {
        const x = data.filter((v, i) => i !== evt);
        setData(x);
    }    

    return (
        <div className={styles.Home} data-testid='Home'>
            <div className={styles.Header}>
                <div className={styles.HeaderName}>
                    <h1>Payment Type</h1>
                </div>
                <div className={styles.HeaderFrom}>
                    <input placeholder='Search by name...' />
                </div>
                <div className={styles.HeaderBtn}>
                    <button type='button'>Payment Type</button>
                </div>
            </div>

            <div className={styles.content}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    <Checkbox
                                        color="primary"
                                        inputProps={{
                                            'aria-label': 'select all desserts',
                                        }}
                                    />
                                    Name</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={row.name}>
                                    <TableCell scope="row">
                                        <Checkbox
                                            color="primary"
                                            inputProps={{
                                                'aria-label': 'select all desserts',
                                            }}
                                        />
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Chip label={row.status} className={row.status == 'active' ? `${styles.chip} ${styles.active}` : `${styles.chip} ${styles.inactive}`} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={e => handleEdit(index, e)}><ModeEditIcon /></IconButton>
                                        <IconButton onClick={e => handleDelete(index, e)}><DeleteOutlineIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Home