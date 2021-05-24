import logo from './logo.svg';
import './App.css';

// Handel file upload
const fileUpload = e => {
}

function App() {
  return (
    <div>
      <h3>Read CSV file</h3>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={fileUpload}
        />
    </div>
  );
}

export default App;
