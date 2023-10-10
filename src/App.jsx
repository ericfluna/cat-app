import useRandomFact from "./hooks/useRandomFact";
import useRandomCatImage from "./hooks/useRandomCatImage";
import Loading from "./components/Loading";
import '../style.css';

export default function App() {
  const { randomFact, getRandomFact } = useRandomFact();
  const { randomCatImage } = useRandomCatImage({ randomFact });

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1>Cat App</h1>
      <button onClick={getRandomFact}>Reset</button>

      {randomCatImage && randomFact ? (
        <div  style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}>
          <h2>{randomFact}</h2>
          <img
            style={{ maxHeight: "400px" }}
            alt={`Image of a cat saying something like: ${randomFact}`}
            src={randomCatImage}
          />
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}
