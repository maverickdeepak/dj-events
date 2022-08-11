import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

import { EventItem } from "@/components/EventItem";
import Link from "next/link";

export default function HomePage({ events }) {
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

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?sort=date:ASC&pagination[limit]=3&populate=*`
  );

  const { data } = await res.json();

  return {
    props: { events: data },
  };
}
