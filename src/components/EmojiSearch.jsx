import React, { useEffect, useState } from "react";
import EmojiData from "./Emoji.json";
import "./styles.css";

function EmojiSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
      </center>
      {data.map((emoji) => (
        <div>
          <div className="card">
            <div className="card-body">
              {emoji.symbol} {emoji.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmojiSearch;
