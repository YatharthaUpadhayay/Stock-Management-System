import {useRef, useState, useEffect } from 'react';
import Stock from './Stock'

// Important parameters and functions
// array of rows
// no of columns
// name of the columns in an array
// id or serial number
// stock inputs and buttons
// enable editing function
// create new Stock function


function StocksList(props) {
    // Important parameters
    const [rowsArray, setRowsArray] = useState([]);
    const [noOfColumns, setNoOfColumns] = useState(6);
    const [colSpecs, setColSpecs] = useState([]);
    const [serialNumber, setSerialNumber] = useState(1);
    
    useEffect(() => {
        setColSpecs(props.columns);
    }, [props.columns]);
    
    // Reference to Stock input and buttons
    const stockInput = useRef(null);
    const stockInputButton = useRef(null);
    
    // Important Functions
    const enableEditing = ()=>{
    
    }
    
    const createStock = ()=>{
    
    }
    
    return (
        <div className='tableContainer'>
            {/* Form for new row creation */}
            <div style={{position:'absolute'}}>
                <div className='formForNewRowContainer'>
                    <form className='formForNewRow'>
                        <h1 style={{textAlign:'center'}}>Create new Row</h1>
                        {
                            props.columns.map((col ,index)=>{
                                if(col[1]  == 'dropdown'){
                                    return (
                                        <>
                                            <label htmlFor={col[0]}>{col[0]}</label>  
                                            <select>
                                                {
                                                    props.categories.map((category, index)=>{
                                                        return (<option value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>)
                                                    })
                                                }
                                            </select>
                                        </>
                                    )
                                }
                                return (
                                    <>
                                        <label htmlFor={col[0]}>{col[0]}</label>
                                        <input type={col[1]} />
                                    </>
                                )
                            })
                        }
                        <button type='submit'>Create</button>
                    </form>
                </div>
            </div>

            {/* Content of the Table */}
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0px 16px'}}>
                <p className='tableTitle'>{props.tableName}</p>
                <i className="fa-solid fa-bars" style={{color:'white'}}></i>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            {
                                props.columns.map((col, index)=>{
                                    return (
                                        <td key={index}>{col[0]}</td>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <i className="fa-solid fa-plus addNewRowButton"></i>
            </div>
        </div>
    )
}

export default StocksList;