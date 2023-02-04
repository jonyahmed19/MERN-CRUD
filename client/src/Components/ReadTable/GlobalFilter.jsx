import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "regenerator-runtime/runtime";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChangeHandler = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 900);
  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChangeHandler(e.target.value);
        }}
      />
    </span>
  );
};
export default GlobalFilter;
