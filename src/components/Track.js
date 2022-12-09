import axios from "axios";
import { useEffect } from "react";

const Track = () => {
  const url = "https://itunes.apple.com/search?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>
        This a website to track children's tylenol stock status on shoper's drup
        mart!
      </h1>
    </div>
  );
};

export default Track;
