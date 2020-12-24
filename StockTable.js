var _this = this;

var StockTable = function StockTable(props) {
    var stocks = props.stocks,
        handleChange = props.handleChange;


    stocks = stocks.map(function (stock, index) {
        var name = stock.name,
            costPerShare = stock.costPerShare,
            marketPrice = stock.marketPrice,
            quantity = stock.quantity;

        return React.createElement(
            "tr",
            { key: index },
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-50", onChange: function onChange(e) {
                        return _this.handleChange(e, index);
                    }, type: "text", name: "name", value: name })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-25", onChange: function onChange(e) {
                        return _this.handleChange(e, index);
                    }, type: "number", name: "quantity", value: quantity })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-25", onChange: function onChange(e) {
                        return _this.handleChange(e, index);
                    }, type: "number", name: "costPerShare", value: costPerShare })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-25", onChange: function onChange(e) {
                        return _this.handleChange(e, index);
                    }, type: "number", name: "marketPrice", value: marketPrice })
            ),
            React.createElement(
                "td",
                null,
                marketPrice * quantity
            ),
            React.createElement(
                "td",
                null,
                (marketPrice - costPerShare) * quantity
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { className: "btn btn-primary" },
                    "Remove"
                )
            )
        );
    });

    return React.createElement(
        "table",
        { className: "table text-center" },
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Stock Name"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Shares Owned"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Cost Per Share"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Market Price"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Market Value"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    "Unrealized Gain/Loss"
                ),
                React.createElement(
                    "th",
                    { scope: "col" },
                    " "
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            stocks
        )
    );
};