import Link from "next/link";
import styled from "styled-components";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
