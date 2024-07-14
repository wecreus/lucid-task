import { useQuery } from "@tanstack/react-query";
import getMockData from "@/api/getMockData";
import useDebounce from "@/lib/hooks/useDebounce";
import type { MockData } from "@/lib/definitions";
import { useState } from "react";
import styles from "./search.module.css";

function MultiOptions({ options }: { options: MockData[] }) {
  if(options.length === 0) return (
    <div>No results</div>
  );
  
  return (
    <div>
      {options.map((option, index) => (
        <div key={`${option.id}-${index}`}>{option.name}</div>
      ))}
    </div>
  );
}

export default function MultiSearchField() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMockData(debouncedSearch),
    queryKey: ["autocomplete", debouncedSearch],
    enabled: search.length > 2,
    staleTime: 1000,
  });

  return (
    <div className={styles.row}>
      <label htmlFor="search-term" className={styles.label}>
        Search for a term:
      </label>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {data && (
        <MultiOptions options={data} />
      )}
    </div>
  );
}
