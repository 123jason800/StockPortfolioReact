var StockTable = function StockTable(props) {
    var stocks = props.stocks,
        handleChange = props.handleChange,
        deleteItem = props.deleteItem;


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
                React.createElement("input", { className: "w-75", onChange: function onChange(e) {
                        return handleChange(e, index);
                    }, type: "text", name: "name", value: name })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-75", onChange: function onChange(e) {
                        return handleChange(e, index);
                    }, type: "number", name: "quantity", value: quantity })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-75", onChange: function onChange(e) {
                        return handleChange(e, index);
                    }, type: "number", name: "costPerShare", value: costPerShare })
            ),
            React.createElement(
                "td",
                null,
                React.createElement("input", { className: "w-75", onChange: function onChange(e) {
                        return handleChange(e, index);
                    }, type: "number", name: "marketPrice", value: marketPrice })
            ),
            React.createElement(
                "td",
                null,
                (marketPrice * quantity).toFixed(2),
                " "
            ),
            React.createElement(
                "td",
                null,
                ((marketPrice - costPerShare) * quantity).toFixed(2)
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return deleteItem(index);
                        }, className: "btn btn-primary" },
                    "Remove"
                )
            )
        );
    });
    if (stocks.length > 0) {
        return React.createElement(
            "table",
            { className: "table text-center mt-5" },
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
    } else {
        return React.createElement(
            "h2",
            { className: "my-5 text-center" },
            "Please Add Some Stocks"
        );
    }
};