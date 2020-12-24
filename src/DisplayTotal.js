const DisplayTotal = (props) => {
    const {stocks} = props;
    const total = stocks.reduce((prevStock, currentStock) => {
     const {marketPrice,costPerShare,quantity} = currentStock;
     let change = ((marketPrice - costPerShare) * quantity);
     let value = marketPrice * quantity;
     let cost = costPerShare * quantity;
     prevStock.totalChange += change;
     prevStock.sharesOwned += parseInt(quantity);
     prevStock.marketValue += value;
     prevStock.costValue += cost;
     return prevStock ;
    },{
        totalChange: 0,
        sharesOwned: 0,
        marketValue: 0,
        costValue: 0,
    });
  
    return (
        <div className="mt-5">
            <h2 className="text-center">Results</h2>
            <table className="table text-center mt-5">
                <thead>
                    <tr>
                    <th scope="col">Portfolio Gain/Losses</th>
                    <th scope="col">Total Shares Owned</th>
                    <th scope="col">Total Cost</th>
                    <th scope="col">Portfolio Value</th>
                    </tr>
                    <tr>
                        <td>{(total.totalChange).toFixed(2)}</td>
                        <td>{total.sharesOwned}</td>
                        <td>{(total.costValue).toFixed(2)}</td>
                        <td>{(total.marketValue).toFixed(2)}</td>
                    </tr>
                </thead>
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
        </div>

    );  
}