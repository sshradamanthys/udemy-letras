import { useState } from "react";

const Form = ({ setQLyrics }) => {
  const [query, setQuery] = useState({
    artist: "",
    song: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }

    setQLyrics(query);

    setError(false);
  };

  const { artist, song } = query;

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre Artista"
                      value={artist}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Canción"
                      value={song}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
