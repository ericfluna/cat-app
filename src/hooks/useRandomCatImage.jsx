import { useEffect, useState } from "react";

export default function useRandomCatImage({ randomFact }) {
  const URL_IMAGE_RANDOM = "https://cataas.com/cat/says/";

  const [randomCatImage, setRandomCatImage] = useState();

  const getRandomCatImage = () => {
    if (!randomFact) return;
    setRandomCatImage();
    const firstWord = randomFact.split(" ").splice(0, 3).join(" ");
    fetch(URL_IMAGE_RANDOM + firstWord).then((data) =>
      setRandomCatImage(data.url)
    );
  };

  useEffect(getRandomCatImage, [randomFact]);

  return { randomCatImage };
}
