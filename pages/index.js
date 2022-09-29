import Link from "next/link";
import styled from "styled-components";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = (props) => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
};

export default HomePage;
