import React from "react";

export default class TableCurrencyLineClass extends React.Component {
    render() {
        console.log(this.props);
        return (
            <tr>
                <td>{this.props.currency}</td>
                <td>{this.props.weBuy}</td>
                <td>{this.props.exchangeRate}</td>
                <td>{this.props.weSell}</td>
            </tr>
        );
    }
}
