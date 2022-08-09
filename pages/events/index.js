import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

import { EventItem } from "@/components/EventItem";

export default function EventPage({ events }) {
  console.log(events);
  return (
    <>
      <Layout>
        <h1>Events</h1>
        {events.length === 0 && <h3>No Events Found</h3>}

        {events.map((event) => {
          return <EventItem event={event} key={event.id} />;
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  return {
    props: { events },
  };
}
