import './App.css';
import TableCurrencyClass from './components/tableCurrency';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <TableCurrencyClass />
            <p className="mt-4">Rates are based from 1 USD.<br />This application uses API from https://currencyfreaks.com.</p>
        </div>
    );
}

export default App;
