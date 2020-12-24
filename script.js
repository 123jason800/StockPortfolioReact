var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StockPortfolio = function (_React$Component) {
    _inherits(StockPortfolio, _React$Component);

    function StockPortfolio(props) {
        _classCallCheck(this, StockPortfolio);

        var _this = _possibleConstructorReturn(this, (StockPortfolio.__proto__ || Object.getPrototypeOf(StockPortfolio)).call(this, props));

        _this.state = {
            stocks: [],
            currentForm: {
                name: '',
                costPerShare: 0,
                marketPrice: 0,
                quantity: 0
            }
        };

        _this.addStock = _this.addStock.bind(_this);
        _this.handleFormChange = _this.handleFormChange.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    // On Submit, Adds a stock to this.state.stocks.


    _createClass(StockPortfolio, [{
        key: 'addStock',
        value: function addStock(event) {
            event.preventDefault();
            var stocks = [].concat(_toConsumableArray(this.state.stocks));
            var currentForm = Object.assign({}, this.state.currentForm);
            stocks.push(currentForm);
            // Reset Current Form and Change State of Stocks
            this.setState({ stocks: stocks });
            this.setState({
                currentForm: {
                    name: '',
                    costPerShare: 0,
                    marketPrice: 0,
                    quantity: 0
                }
            });
        }
    }, {
        key: 'handleFormChange',
        value: function handleFormChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            var currentForm = this.state.currentForm;
            currentForm[name] = value;
            this.setState({ currentForm: currentForm });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event, key) {
            var _event$target2 = event.target,
                name = _event$target2.name,
                value = _event$target2.value;

            var _state$stocks = _toArray(this.state.stocks),
                stocks = _state$stocks.slice(0);

            console.log(key);
            var currentStock = stocks[key];
            console.log(currentStock);
            currentStock[name] = value;

            this.setState({ stocks: stocks });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state.stocks);
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(StockTable, { stocks: this.state.stocks, handleChange: this.handleChange }),
                React.createElement(AddStockForm, { handleChange: this.handleFormChange, addStock: this.addStock, currentForm: this.state.currentForm })
            );
        }
    }]);

    return StockPortfolio;
}(React.Component);

ReactDOM.render(React.createElement(StockPortfolio, null), document.getElementById('root'));