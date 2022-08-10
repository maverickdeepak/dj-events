import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/EventItem.module.css";

export const EventItem = ({ event }) => {
  const { attributes } = event;
  console.log(attributes);
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={attributes.image.data.attributes.formats.thumbnail.url}
          alt={event.name}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {new Date(attributes.date).toLocaleDateString("en-US")} at{" "}
          {attributes.time}
        </span>
        <h3>{attributes.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${attributes.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};
