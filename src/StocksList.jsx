import { useEffect, useState } from 'react';
import Stock from './Stock'
function StocksList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/stock_data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="tableContainer">
            <p className="tableTitle">Section 1</p>
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
                    {
                        data.map(item => (
                            <Stock
                                key={item.stockID}
                                stockID={item.stockID}
                                name={item.name}
                                category={item.category}
                                quantity={item.quantity}
                                price={item.price}
                                expiry={item.expiry}
                            />))
                    }
                    <tr className='stockInputField'>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                    </tr>
                </tbody>
            </table>
            <button className='addNewStock'>+</button>
        </div>
    )
}

export default StocksList;