import React, { useState, useCallback } from "react";
import "./AutoSuggestions.css";
import axios from "axios";
import lodash from "lodash";


const DEBOUBCE_DELAY = 500;
const ITEMS_API_URL = "https://www.reddit.com/search.json";

const AutoSuggestions = () => {
  const [userInput, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnInputChange = (userInput) => {
      setIsLoading(true);

      console.log(`${ITEMS_API_URL}?q=${userInput}`)

      axios
        .get(`${ITEMS_API_URL}?q=${userInput}`)
        .then((response) => {
          setResult(response.data.data.children);
          setError("");
          setIsLoading(false);
          console.log(response.data.data.children);
        })
        .catch(() => {
          setError("An error occured. Please try again.");
          setIsLoading(false);
        });
  };

  const handler = useCallback(lodash.debounce(handleOnInputChange, DEBOUBCE_DELAY), []);

  const onChange = (event) => {
    setInput(event.target.value);
    handler(userInput);
  };

  const onItemSelection = (event) => {
    setInput(event.target.innerText);
    setResult([]);
  };

  return (
    <div className="wrapper">
      <div className="control">
        <input
          type="text"
          className="input"
          onChange={onChange}
          value={userInput}
        />
      </div>
      {error && <p>{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      <div className="list">
        {result.map((item, index) => (
          <div
            className="list-item"
            key={index}
            id={`list-item-${index}`}
            onClick={onItemSelection}
          >
            {item.data.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSuggestions;
