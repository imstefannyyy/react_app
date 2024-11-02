import React from 'react';
import axios from 'axios';
import TableCurrencyLineClass from './tableCurrencyLine';

export default class TableCurrencyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    async componentDidMount() {
        const currencyData = await this.getCurrencyData();
        this.setState({ data: currencyData });
    }    

    async getCurrencyData() {
        const response = await axios({
            method: 'GET',
            url: 'https://api.currencyfreaks.com/v2.0/rates/latest?base=usd&symbols=cad,eur,idr,jpy,chf,gbp&apikey=e3f7eb58925243b98a3aa03792b658a0',
        });
        let result = {};
        Object.entries(response.data.rates).forEach(([key, value]) => {
            result[key] = {
                "currency": key,
                "weBuy": (value * 1.05).toFixed(4),
                "exchangeRate": parseFloat(value).toFixed(4),
                "weSell": (value * 0.95).toFixed(4)
            };
        });
        return result;
    }

    render() {
        const data = Object.values(this.state.data);
        return (
            <table className="w-50">
                <thead>
                    <tr>
                        <th className="w-25">Currency</th>
                        <th className="w-25">We Buy</th>
                        <th className="w-25">Exchange Rate</th>
                        <th className="w-25">We Sell</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(currency => (
                        <TableCurrencyLineClass key={currency.currency} {...currency} />
                    ))}
                </tbody>
            </table>
        );
    }
}
