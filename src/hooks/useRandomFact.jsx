import { useCallback, useEffect, useState } from "react";

export default function useRandomFact() {
  const URL_FACTS_RANDOM = "https://catfact.ninja/fact";

  const [randomFact, setRandomFact] = useState();

  const getRandomFact = useCallback(() => {
    fetch(URL_FACTS_RANDOM)
      .then((data) => data.json())
      .then((data) => setRandomFact(data.fact));
  });

  useEffect(getRandomFact, []);

  return { randomFact, getRandomFact };
}
