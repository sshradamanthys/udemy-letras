import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";

function App() {
  const [qLyrics, setQLyrics] = useState({});
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    if (Object.keys(qLyrics).length === 0) return;

    const fetchAPI = async () => {
      const { artist, song } = qLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      try {
        const res = await axios(url);
        setLyrics(res.data.lyrics);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPI();
  }, [qLyrics]);

  console.log(lyrics);
  return (
    <>
      <Form setQLyrics={setQLyrics} />
    </>
  );
}

export default App;
