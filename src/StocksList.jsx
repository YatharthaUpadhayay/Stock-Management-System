import { useEffect, useState } from 'react';
import Stock from './Stock'

function StocksList({tableName}) {
    const [rows, setRows] = new useState([]);
    const [noOfColumns, setNoOfColumns] = new useState([6]);
    const [serialNo, setSerialNo] = new useState(0);

    const enableEditing = () => {
        setSerialNo(rows.length+1);
        document.getElementById('stockInputField').style.display = 'table-row';
        document.getElementById('stockInputFieldButton').style.display = 'table-row';
        document.getElementById('name').focus();
    }

    const createNewStock = () => {
        let name = document.getElementById('name').value;
        let category = document.getElementById('category').value;
        let quantity = document.getElementById('quantity').value;
        let price = document.getElementById('price').value;
        let expiry = document.getElementById('expiry').value;
        if (name != '' ||
            category != '' ||
            quantity != '' ||
            price != '' ||
            expiry != '') {
            setRows([...rows, <Stock key={rows.length} stockID={serialNo} name={name} category={category} quantity={quantity} price={price} expiry={expiry} />]);
            document.getElementById('stockInputField').style.display = 'none';
            document.getElementById('stockInputFieldButton').style.display = 'none';
        }
    }

    return (
        <div className="tableContainer">
            <p className="tableTitle">{tableName}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Expiry Date</th>
                    </tr>
                </thead>
                <tbody id='stockContainer'>
                    {rows}
                    <tr id='stockInputField'>
                        <th>{serialNo}</th>
                        <th><input type="text" id='name' /></th>
                        <th><input type="text" id='category' /></th>
                        <th><input type="text" id='quantity' /></th>
                        <th><input type="text" id='price' /></th>
                        <th><input type="text" id='expiry' /></th>
                    </tr>
                    <tr id='stockInputFieldButton' style={{ 'display': 'none' }}>
                        <th colSpan={noOfColumns}>
                            <button onClick={createNewStock} style={{ 'borderRadius': '12px', 'border': '1px solid #666', 'aspectRatio': 'auto', 'padding': '4px 16px', 'boxShadow': 'none', 'margin': '16px 0px' }} className='toolsCircle'>Create</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <button className='addNewStock' onClick={enableEditing}>+</button>
        </div>
    )
}

export default StocksList;