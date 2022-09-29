import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <h1>No event found!</h1>;
  }

  // const humanReadableDate = new Date(event.date).toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  // const formattedAddress = event.location.replace(", ", "\n");

  return (
    <>
      <EventSummary />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>event.description</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
