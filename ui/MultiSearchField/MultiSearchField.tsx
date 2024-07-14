import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getMockData from "@/api/getMockData";
import useDebounce from "@/lib/hooks/useDebounce";
import type { MockData } from "@/lib/definitions";
import styles from "./search.module.css";
import Select, { type CSSObjectWithLabel } from "react-select";
import useFormulaStore from "@/lib/store";

const customStyles = {
  option: (defaultStyles: CSSObjectWithLabel, state: any) => ({
    ...defaultStyles,
    color: state.isSelected ? "#2c2c2c" : "#ffffff",
    backgroundColor: state.isSelected ? "#d8d8d8" : "#2c2c2c",
  }),
  control: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    color: "#ffffff",
    backgroundColor: "#2c2c2c",
    padding: "10px",
    border: "none",
    boxShadow: "none",
  }),
  singleValue: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    color: "#ffffff",
  }),
  valueContainer: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    color: "#ffffff",
  }),
  input: (defaultStyles: CSSObjectWithLabel) => ({
    ...defaultStyles,
    color: "#ffffff",
  }),
};

export default function MultiSearchField() {
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const { set } = useFormulaStore();

  const debouncedSearch = useDebounce(search, 400);

  const {
    data,
    isLoading,
  }: { data: MockData[] | undefined; isLoading: boolean } = useQuery({
    queryFn: async () => await getMockData(debouncedSearch),
    queryKey: ["autocomplete", debouncedSearch],
    enabled: search.length > 2,
    staleTime: 1000,
  });

  useEffect(() => {
    set(total);
  }, [total, set]);

  return (
    <div className={styles.row}>
      <Select
        instanceId={"search-term"}
        inputId="search-term"
        onChange={(newValue) =>
          setTotal(
            newValue.reduce(
              (accumulator, currentValue) =>
                accumulator + Number(currentValue.value),
              0
            )
          )
        }
        placeholder="Search by name"
        isMulti
        getOptionLabel={(option: MockData) => option.name}
        options={data}
        isLoading={isLoading}
        onInputChange={(newValue) => setSearch(String(newValue))}
        styles={customStyles}
      />
    </div>
  );
}
