import { useState } from 'react'
import './App.css'
import StocksList from './StocksList'
import ToolBar from './ToolBar'

function App() {
  const [tables, setTables] = new useState([]);
  const enableNewTableCreation = () => {
    document.getElementById('newTableCreator').style.display = 'flex';
    document.getElementById('newTableCreatorButton').style.display = 'none';
    document.getElementById('tableTitle').focus();
  }
  
  const createTable = () => {
    let tableName = document.getElementById('tableTitle').value;
    if(tableName != ''){
      tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
      setTables([...tables, <StocksList key={tables.length} tableName={tableName} />]);
      document.getElementById('newTableCreator').style.display = 'none';
      document.getElementById('newTableCreatorButton').style.display = 'block';
    }
  }

  const cancelNewTableCreation = () => {
    document.getElementById('newTableCreator').style.display = 'none';
    document.getElementById('tableTitle').value = '';
    document.getElementById('newTableCreatorButton').style.display = 'block';
  }

  return (
    <>
      <h1 className='text-red-600'>Stocks Management System</h1>
      <ToolBar />
      {tables}
      <div style={{'height':'50vh', 'display':'grid', 'placeItems':'center'}}>
        
        <div id='newTableCreator' style={{'display':'none', 'flexDirection':'column', 'gap':'12px', 'border':'1px solid #666', 'padding':'24px', 'borderRadius':'28px', 'boxShadow':'6px 6px 5px #c5c5c5, -6px -6px 5px #ffffff'}}>
          <p style={{'margin':'0px'}}>Enter Table name:</p>
          <input type="text" id='tableTitle' style={{'borderRadius':'12px', 'fontSize':'18px', 'border':'1px solid #666', 'padding':'4px 6px', 'background':'#e8e8e8', 'color':'#090909'}}/>
          <button onClick={createTable} style={{'borderRadius': '12px', 'border': '1px solid #666', 'aspectRatio': 'auto', 'padding': '4px 16px', 'boxShadow': 'none'}} className='toolsCircle'>Create</button>
          <button onClick={cancelNewTableCreation} id='cancelNewTable' style={{'borderRadius': '12px', 'border': '1px solid #666', 'aspectRatio': 'auto', 'padding': '4px 16px', 'boxShadow': 'none'}} className='toolsCircle'>Cancel</button>
        </div>

        <button onClick={enableNewTableCreation} id='newTableCreatorButton' style={{'fontWeight':'bold', 'border':'2px solid #666', 'boxShadow':'6px 6px 5px #c5c5c5, -6px -6px 5px #ffffff'}} className='toolsCircle'>Create a new Table</button>
      </div>
    </>
  )
}

export default App
