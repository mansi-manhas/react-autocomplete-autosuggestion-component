import AutoComplete from './components/AutoComplete';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

import AutoSuggestions from './components/AutoSuggestions';

const ITEMS_API_URL =
  "https://mocki.io/v1/5fc88195-ea7a-40f1-a436-419142e3b4e1";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) {
      axios.get(ITEMS_API_URL).then((response) => { console.log(response.data); setData(response.data)});
    }
  });

  return (
    <div className="App">
      <AutoComplete suggestions={data}/>
      {/* <AutoSuggestions /> */}
    </div>
  );
}

export default App;
