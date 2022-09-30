import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

const AllEventsPage = () => {
  const eventAll = getAllEvents();

  return (
    <div>
      <EventList items={eventAll} />
    </div>
  );
};

export default AllEventsPage;
