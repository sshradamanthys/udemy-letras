import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Lyrics from "./components/Lyrics";
import Info from "./components/Info";

function App() {
  const [qLyrics, setQLyrics] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(qLyrics).length === 0) return;

    const fetchAPI = async () => {
      const { artist, song } = qLyrics;
      const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlInfo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyrics, info] = await Promise.all([
        axios(urlLyrics),
        axios(urlInfo),
      ]);

      setLyrics(lyrics.data.lyrics);
      setInfo(info.data.artists[0]);
    };

    fetchAPI();
  }, [qLyrics, info]);

  return (
    <>
      <Form setQLyrics={setQLyrics} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
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
