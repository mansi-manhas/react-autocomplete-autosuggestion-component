import React, { Fragment, useState } from "react";
import "./AutoComplete.css";

const AutoComplete = (props) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = (event) => {
    const { suggestions } = props;
    const userInput = event.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(event.currentTarget.value);
  };

  const onClick = (event) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(event.currentTarget.innerText);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      //enter
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (event.keyCode === 38) {
      //arrow up
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (event.keyCode === 40) {
      // User pressed the down arrow, increment the index
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let resultComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length > 0) {
      resultComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {   // Flag the active suggestion with a class
              className = "suggestion-active";
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
        resultComponent = (
            <div className="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
    }
  }

  return (
    <Fragment>
      <input
        className="text"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {resultComponent}
    </Fragment>
  );

};

export default AutoComplete;
