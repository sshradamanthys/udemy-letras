const Lyrics = ({ lyrics }) => {
  if (lyrics === "") return null;
  return (
    <>
      <h2>Letra</h2>
      <p style={{ whiteSpace: "pre-line" }}>{lyrics}</p>
    </>
  );
};

export default Lyrics;
