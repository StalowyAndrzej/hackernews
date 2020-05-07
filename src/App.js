import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hnAPI";

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};
