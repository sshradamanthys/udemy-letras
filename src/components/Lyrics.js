const Lyrics = ({ lyrics }) => {
  if (lyrics === "") return null;
  return (
    <>
      <h2>Letra</h2>
      <p className="letra">{lyrics}</p>
    </>
  );
};

export default Lyrics;
