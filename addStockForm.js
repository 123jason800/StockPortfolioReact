var AddStockForm = function AddStockForm(props) {
    var handleChange = props.handleChange,
        addStock = props.addStock,
        currentForm = props.currentForm;
    var name = currentForm.name,
        costPerShare = currentForm.costPerShare,
        marketPrice = currentForm.marketPrice,
        quantity = currentForm.quantity;

    return React.createElement(
        "form",
        { onSubmit: addStock, className: "row justify-content-center mt-5" },
        React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
                "label",
                { className: "d-block", htmlFor: "name" },
                " Stock Name"
            ),
            React.createElement("input", {
                onChange: handleChange,
                className: "w-100",
                type: "text",
                name: "name",
                value: name,
                required: true
            })
        ),
        React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
                "label",
                { className: "d-block", htmlFor: "costPerShare" },
                "Cost Per Share"
            ),
            React.createElement("input", {
                onChange: handleChange,
                className: "w-50",
                type: "number",
                name: "costPerShare",
                value: costPerShare
            })
        ),
        React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
                "label",
                { className: "d-block", htmlFor: "marketPrice" },
                "  Market Price"
            ),
            React.createElement("input", {
                onChange: handleChange,
                className: "w-50",
                type: "number",
                name: "marketPrice",
                value: marketPrice
            })
        ),
        React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
                "label",
                { className: "d-block", htmlFor: "Quantity" },
                "Quantity"
            ),
            React.createElement("input", {
                onChange: handleChange,
                className: "w-50",
                type: "number",
                name: "quantity",
                value: quantity
            })
        ),
        React.createElement("input", {
            className: "h-50 align-self-end btn btn-primary",
            type: "submit",
            value: "Add Stock"
        })
    );
};