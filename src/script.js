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
        this.handleChange - this.handleChange.bind(this);
    }
    // On Submit, Adds a stock to this.state.stocks.
    addStock(event) {
        event.preventDefault();
        const {currentForm,stocks} = this.state;
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
        })

    }

    handleFormChange(event) {
        const {name,value} = event.target;
        const currentForm = this.state.currentForm;
        currentForm[name] = value;
        this.setState({currentForm});
    }
    
    handleChange(event) {
        console.log(event.target);
        const {name,value} = event.target;
        console.log(name,value);
    }

    render() {
        return (   
            <div className="container">
                <StockTable stocks={this.state.stocks} handleChange={this.handleChange} />
                <AddStockForm handleChange={this.handleFormChange} addStock={this.addStock} currentForm={this.state.currentForm} />
            </div>
        );
    }
}


ReactDOM.render(
    <StockPortfolio />,
    document.getElementById('root')
);