const AddStockForm = (props) => {
    const {handleChange,addStock,currentForm} = props;
    const {name,costPerShare,marketPrice,quantity} = currentForm;
    return (
            <form onSubmit={addStock} className="row justify-content-center mt-5">
                <div className="col-2">
                    <label className="d-block" htmlFor="name"> Stock Name</label>
                    <input 
                    onChange={handleChange} 
                    className="w-100" 
                    type="text" 
                    name="name"
                    value={name} 
                    required 
                    />
                </div>
                <div className="col-2">
                    <label className="d-block" htmlFor="costPerShare">Cost Per Share</label>
                    <input 
                    onChange={handleChange} 
                    className="w-50" 
                    type="number" 
                    name="costPerShare" 
                    value={costPerShare} 
                    />
                </div>
                <div className="col-2">
                    <label className="d-block" htmlFor="marketPrice">  Market Price</label>
                    <input 
                    onChange={handleChange} 
                    className="w-50" 
                    type="number" 
                    name="marketPrice" 
                    value={marketPrice}
                    />
                </div>
                <div className="col-2">
                    <label className="d-block" htmlFor="Quantity">Quantity
                    </label>
                    <input 
                    onChange={handleChange} 
                    className="w-50" 
                    type="number" 
                    name="quantity" 
                    value={quantity}
                    />
                </div>
                <input  
                className="h-50 align-self-end btn btn-primary" 
                type="submit" 
                value="Add Stock" 
                /> 
            </form>   
        );
};
   