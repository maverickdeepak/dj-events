import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import qs from "qs";

import { useRouter } from "next/router";

import { EventItem } from "@/components/EventItem";
import Link from "next/link";

export default function SearchPage({ events }) {
  const router = useRouter();

  return (
    <>
      <Layout title="Search Result">
        <Link href="/events">Go Back</Link>
        <h1>Search Result for {router.query.term}</h1>
        {events.length === 0 && <h3>No Events Found</h3>}

        {events.map((event) => {
          return <EventItem event={event} key={event.id} />;
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $containsi: term,
            },
          },
          {
            performers: {
              $containsi: term,
            },
          },
          {
            description: {
              $containsi: term,
            },
          },
          {
            venue: {
              $containsi: term,
            },
          },
        ],
      },
    },
    {
      encode: false,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${query}&populate=*`);

  const { data } = await res.json();

  return {
    props: { events: data },
  };
}
