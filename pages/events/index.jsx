import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useState } from "react";

const AllEventsPage = () => {
  const eventAll = getAllEvents();

  const [eventList, setEventList] = useState(eventAll);

  return (
    <>
      <EventSearch setEventList={(eventArr) => setEventList(eventArr)} />
      <EventList items={eventList} />
    </>
  );
};

export default AllEventsPage;
