

import React, { Component } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Autosuggest from 'Autosuggest';
import people from './people';
import { escapeRegexCharacters } from 'utils/utils';


const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');

  return people.filter(person => regex.test(getSuggestionValue(person)));
};

const getSuggestionValue = suggestion =>
  `${suggestion.first} ${suggestion.last}`;

const renderSuggestion = (suggestion, { query }) => {
  const suggestionText = `${suggestion.first} ${suggestion.last}`;
  const matches = match(suggestionText, query);
  const parts = parse(suggestionText, matches);

  return (
        parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
  );
};

export default class CustomRender extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested ({ value }) {
    setTimeout(() => {
      if (value === this.state.value) {
        this.setState({
          suggestions: getSuggestions(value)
        });
      }
    }, 200);
  }

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            focusInputOnSuggestionClick={focusInputOnSuggestionClick}
            id="custom-render-example"
          />
    );
  }
}