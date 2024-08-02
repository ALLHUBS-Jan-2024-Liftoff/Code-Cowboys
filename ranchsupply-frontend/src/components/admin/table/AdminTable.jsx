import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';

export default function AdminTable({rows}) {
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    const [message, setMessage] = React.useState("");
    
    const columnReferences = Object.keys(rows[0])

    const columnsToDisplay = columnReferences.map((col) => {
        const headerName = col.split("_").join(" ").toUpperCase()
        const field = col
        return { "headerName": headerName, "field": field }
    })

    const handleRowClick = (params) => {
        setMessage(`Row "${params.row.product_id}" has been clicked`);
      };

    return (
        <div style={{ height: 400, width: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <DataGrid
                getRowId={(row) => row.product_id}
                rows={rows}
                columns={columnsToDisplay}
                onRowClick={handleRowClick}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
                
            />
            {message && <Alert severity="info">{message}</Alert>}
        </div>
    );
}
