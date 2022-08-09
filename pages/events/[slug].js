import React from "react";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";

const EventPage = ({ event }) => {
  return (
    <Layout>
      <div>
        <h1>{event.name}</h1>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  console.log(slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  console.log(events);

  return {
    props: {
      event: events[0],
    },
  };
}

export default EventPage;
