import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`${styles.box}`} onSubmit={handleSubmit}>
      <form name="search">
        <input
          type="text"
          value={search ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
          className={`${styles.input}`}
          name="src"
        />
      </form>
    </div>
  );
}
