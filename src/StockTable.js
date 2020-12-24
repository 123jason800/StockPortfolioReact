const StockTable = (props) => {

    let {stocks,handleChange} = props;
    
    stocks = stocks.map((stock,index) => {
        const {name,costPerShare,marketPrice,quantity} = stock;
        return (
            <tr key={index}>
                    <td><input className="w-50" onChange={e => this.handleChange(e,index)} type="text" name="name" value={name} /></td>
                    <td><input className="w-25" onChange={e => this.handleChange(e,index)} type="number" name="quantity" value={quantity}/></td>
                    <td><input className="w-25" onChange={e => this.handleChange(e,index)} type="number" name="costPerShare" value={costPerShare} /></td>
                    <td><input className="w-25" onChange={e => this.handleChange(e,index)} type="number" name="marketPrice" value={marketPrice} /></td>
                    <td>{marketPrice * quantity}</td>
                    <td>{(marketPrice - costPerShare) * quantity}</td>
                    <td><button className="btn btn-primary">Remove</button></td>
            </tr>);
    })
    

    return (
        <table className="table text-center">
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