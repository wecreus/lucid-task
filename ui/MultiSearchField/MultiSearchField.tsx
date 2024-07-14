import { useQuery } from "@tanstack/react-query";
import getMockData from "@/api/getMockData";
import { useState } from "react";
import styles from "./search.module.css";

export default function MultiSearchField() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: async () =>
      await getMockData(search),
    queryKey: ["autocomplete", search],
    enabled: search.length > 2,
    staleTime: 1000
  });

  console.log(data);

  return (
    <div className={styles.row}>
      <label htmlFor="search-term" className={styles.label}>
        Search for a term:
      </label>
      <input
        id="search-term"
        name="search-term"
        type="search"
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
