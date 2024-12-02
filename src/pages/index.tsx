import React, { useMemo } from "react";
import Carousel from "../components/Carousel";
import { media } from "../config/videoUrls";

const Home: React.FC = () => {
  return (
    <Carousel media={media} />
  );
};

export default Home;
