import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

import { EventItem } from "@/components/EventItem";
import Link from "next/link";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No Events Found</h3>}

        {events.map((event) => {
          return <EventItem event={event} key={event.id} />;
        })}
        {events.length > 0 && (
          <Link href="/events">
            <a className="btn-secondary">View All Events</a>
          </Link>
        )}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
  };
}
