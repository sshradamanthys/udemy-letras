import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Lyrics from "./components/Lyrics";

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

  return (
    <>
      <Form setQLyrics={setQLyrics} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Bio</h2>
          </div>
          <div className="col-md-6">
            <Lyrics lyrics={lyrics} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
