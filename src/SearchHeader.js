import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchHeaderDiv">
      <form onSubmit={handleOnSubmit}>
        <label>Nasıl Bir Görsel Arıyorsunuz?</label>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
