class StockPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            currentForm: {
                name:'',
                costPerShare: 0,
                marketPrice: 0,
                quantity: 0
            }
        }

        this.addStock = this.addStock.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    // On Submit, Adds a stock to this.state.stocks.
    addStock(event) {
        event.preventDefault();
        const stocks = [...this.state.stocks];
        const currentForm = {
                              ...this.state.currentForm
                            };
        stocks.push(currentForm);
        // Reset Current Form and Change State of Stocks
        this.setState({stocks});
        this.setState({
            currentForm: {
                name: '',
                costPerShare: 0,
                marketPrice: 0,
                quantity: 0
            }
        });
    }

    handleFormChange(event) {
        const {name,value} = event.target;
        const currentForm = this.state.currentForm;
        currentForm[name] = value;
        this.setState({currentForm});
    }
    
    handleChange(event,key) {
        const {name,value} = event.target;
        const [...stocks] = this.state.stocks;
        const currentStock = stocks[key];
        currentStock[name] = value;
      
        this.setState({stocks});
    }

    deleteItem(key) {
        const stocks = this.state.stocks.filter((stock,id) => {
            return id !== key;
        });
        this.setState({stocks});
    }

    render() {
        return (   
            <div className="container">
                <h1 className="text-center">Stock Portfolio</h1>
                <AddStockForm handleChange={this.handleFormChange} addStock={this.addStock} currentForm={this.state.currentForm} />
                <StockTable stocks={this.state.stocks} handleChange={this.handleChange} deleteItem={this.deleteItem} />
                <DisplayTotal stocks={this.state.stocks} />
            </div>
        );
    }
}


ReactDOM.render(
    <StockPortfolio />,
    document.getElementById('root')
);