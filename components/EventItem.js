import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/EventItem.module.css";

export const EventItem = ({ event }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={event.image ? event.image : "/images/event-default.png"}
          alt={event.name}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {event.date} at {event.time}
        </span>
        <h3>{event.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${event.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};
