import { useState } from "react";
import styles from "./ListGroup.module.css";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

// destructured props so don't need props.item, props.heading
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook -
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [name, setName] = useState("Tom");

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
