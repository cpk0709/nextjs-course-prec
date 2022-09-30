import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const AllEventsPage = () => {
  const eventAll = getAllEvents();

  return (
    <>
      <EventSearch />
      <EventList items={eventAll} />
    </>
  );
};

export default AllEventsPage;
