var DisplayTotal = function DisplayTotal(props) {
    var stocks = props.stocks;

    var total = stocks.reduce(function (prevStock, currentStock) {
        var marketPrice = currentStock.marketPrice,
            costPerShare = currentStock.costPerShare,
            quantity = currentStock.quantity;

        var change = (marketPrice - costPerShare) * quantity;
        var value = marketPrice * quantity;
        var cost = costPerShare * quantity;
        prevStock.totalChange += change;
        prevStock.sharesOwned += parseInt(quantity);
        prevStock.marketValue += value;
        prevStock.costValue += cost;
        return prevStock;
    }, {
        totalChange: 0,
        sharesOwned: 0,
        marketValue: 0,
        costValue: 0
    });

    return React.createElement(
        "div",
        { className: "mt-5" },
        React.createElement(
            "h2",
            { className: "text-center" },
            "Results"
        ),
        React.createElement(
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
                        "Portfolio Gain/Losses"
                    ),
                    React.createElement(
                        "th",
                        { scope: "col" },
                        "Total Shares Owned"
                    ),
                    React.createElement(
                        "th",
                        { scope: "col" },
                        "Total Cost"
                    ),
                    React.createElement(
                        "th",
                        { scope: "col" },
                        "Portfolio Value"
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        total.totalChange.toFixed(2)
                    ),
                    React.createElement(
                        "td",
                        null,
                        total.sharesOwned
                    ),
                    React.createElement(
                        "td",
                        null,
                        total.costValue.toFixed(2)
                    ),
                    React.createElement(
                        "td",
                        null,
                        total.marketValue.toFixed(2)
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                React.createElement("tr", null)
            )
        )
    );
};