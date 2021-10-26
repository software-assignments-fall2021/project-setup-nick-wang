import React, { useState, useEffect } from "react";
import "./Account_page2.css";
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


const ongrid = (props) => {
	return (
    <article>
      <section>
        <h1>{props.T_Date}</h1> <p>{props.T_amount}</p>
      </section>
      <section>
       <p>{props.T_Name}</p>
      </section>
    </article>
  )
}

function App() {
  const [count, setCount] = useState(0);

  const rowData = [
    {Name: "Fruits", Date: "10.04.2021", Amount: 35},
    {Name: "Gas", Date: "10.05.2021", Amount: 200},
    {Name: "Meat", Date: "10.03.2021", Amount: 35}
  ];

  const handleClick = e => {
    console.log("clicked!");
    // update the counter
    setCount(count + 1);
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("NMD");
  }

  
	return (
    
    <div>
      {/* Change the href to home link */}
      <a href="homepage/">
        {/* Change the image src to logo */}
        <img src="logo01.png" className = "center"/>
      </a>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit"> Return </button>
        </form>
       <button onClick={handleClick}> Return </button>
       <h> Most Recent Transaction</h>
      </div>
        <div style={{ width: '100%', height: '50%' }}>
          <div className="container">
            <div id="left"></div>
            <div id="center">
              <div
                id="myGrid"
                style={{
                  height: '100%',
                  width: '100%',
                }}
                className="ag-theme-material"
              >
                <AgGridReact
                  rowData={rowData}>
                  <AgGridColumn field="Name" sortable={ true } filter={ true } editable={true}></AgGridColumn>
                  <AgGridColumn field="Date" sortable={ true } filter={ true } editable={true}></AgGridColumn>
                  <AgGridColumn field="Amount" sortable={ true } filter={ true } editable={true}></AgGridColumn>
              </AgGridReact>
              </div>
            </div>
            <div id="right"></div>
          </div>
        </div>
      </div>
);
}

export default App;
