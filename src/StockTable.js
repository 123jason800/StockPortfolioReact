const StockTable = (props) => {

    let {stocks,handleChange,deleteItem} = props;
    
    stocks = stocks.map((stock,index) => {
        const {name,costPerShare,marketPrice,quantity} = stock;
        return (
            <tr key={index}>
                    <td><input className="w-75" onChange={e => handleChange(e,index)} type="text" name="name" value={name} /></td>
                    <td><input className="w-75" onChange={e => handleChange(e,index)} type="number" name="quantity" value={quantity}/></td>
                    <td><input className="w-75" onChange={e => handleChange(e,index)} type="number" name="costPerShare" value={costPerShare} /></td>
                    <td><input className="w-75" onChange={e => handleChange(e,index)} type="number" name="marketPrice" value={marketPrice} /></td>
                    <td>{(marketPrice * quantity).toFixed(2)} </td>
                    <td>{((marketPrice - costPerShare) * quantity).toFixed(2)}</td>
                    <td><button onClick={() => deleteItem(index)} className="btn btn-primary">Remove</button></td>
            </tr>);
    });
    if (stocks.length > 0) {
        return ( 
        
            <table className="table text-center mt-5">
                <thead>
                    <tr>
                    <th scope="col">Stock Name</th>
                    <th scope="col">Shares Owned</th>
                    <th scope="col">Cost Per Share</th>
                    <th scope="col">Market Price</th>
                    <th scope="col">Market Value</th>
                    <th scope="col">Unrealized Gain/Loss</th>
                    <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {stocks}
                </tbody>
            </table>
        );
    }
    else {
        return (
            <h2 className="my-5 text-center">Please Add Some Stocks</h2>
        );
    }

   
}