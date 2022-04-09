import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);

      try {
        const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28');

        setEmojisData(res.data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchEmojis()
  }, [])

  return (
    <>
      <Navbar />

      <h1>Hello, world!</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Oooopss...</p>}
      {emojisData.length > 0 && <p>emojis data sukses.</p>}
    </>
  );
}

export default App;
