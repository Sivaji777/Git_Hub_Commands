import React, { useEffect, useState } from 'react'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { Form, FormGroup } from 'react-bootstrap';

function AgeGrid() {
    const rowHeight = 50;

    const [rowData, setRowData] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setRowData(json))
    }, [])

    console.log(rowData, 'rowData');

    const [colDefs, setColDefs] = useState(
        [
            {
                headerName: "#",
                valueGetter: "node.rowIndex + 1",
                filter: true,
                lockPosition: true,
            },
            {
                headerName: "name",
                filter: true,
                field: "name",
            },
            {
                headerName: 'company',
                filter: true,
                field: 'company.name',
            },
            {
                headerName: "MobileNumber",
                filter: true,
                // valueGetter: 'data.Frenchises[0].MobileNumber',
            },
            {
                headerName: "Type",
                filter: true,
                cellRendererFramework: (params) => (
                    <center
                    // onClick={() => handleClickdata(params)
                    // }
                    >
                        {
                            params.data.id == 2 ?
                                <div className='row' >
                                    <div className='col' >
                                        <FormGroup  >
                                            <Form.Control type='text' >

                                            </Form.Control>
                                        </FormGroup>
                                    </div>
                                    <div className='col' >
                                        <button className='btn btn-primary'  >sdhcstdc</button>
                                    </div>
                                </div>
                                : <button className='btn btn-primary'  >update</button>
                        }
                    </center >
                )
            }
        ])


    const one = [1, 2]
    const getRowStyle = params => {
        if (!one.includes(params.data.id)) {
            return { background: '#f18c96' };
        }
        else {
            return { background: '#c0e2f0' };
        }
    };


    const DefaultColumnSetting = {
        sortable: true,
        filter: true,

        floatingFilter: true,
        flex: 1,
        resizable: true,
        minWidth: 120,
    };
    return (
        <div>
            <div
                className="ag-theme-alpine"
                style={{ height: "70vh", width: "100%" }}
            >
                <AgGridReact
                    rowHeight={rowHeight}
                    columnDefs={colDefs}
                    defaultColDef={DefaultColumnSetting}
                    pagination={true}
                    paginationPageSize={10}
                    rowData={rowData}
                    getRowStyle={getRowStyle}
                />{" "}
            </div>

        </div>
    )
}

export default AgeGrid