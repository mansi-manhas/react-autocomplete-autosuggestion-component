## AutoComplete/AutoSuggestions React.js Components

This project implements a [React component](https://reactjs.org/docs/react-component.html) that basically renders a text input field with auto-completion.

The component is implemented in two ways:

### #1 - [AutoComplete.js](https://github.com/mansi-manhas/react-autocomplete-autosuggestion-component/blob/main/src/components/AutoComplete.js) - Component Flow

- This one is wrapper around the main `App` component.
- The data is fetched from an API in the `App` component and is passed to `AutoComplete` component as `props`.
- Entire data from the API is fetched all at once, and `AutoComplete` component filters the result.
- I created a fake API using [mocki.io](https://mocki.io/fake-json-api) in order to populate my component with dummy data.
- You can access the dummy data [here](https://mocki.io/v1/5fc88195-ea7a-40f1-a436-419142e3b4e1).

### #1 - DEMO

![](https://github.com/mansi-manhas/react-autocomplete-autosuggestion-component/blob/main/auto-completion.gif) 


### #2 - [AutoSuggestions.js](https://github.com/mansi-manhas/react-autocomplete-autosuggestion-component/blob/main/src/components/AutoSuggestions.js) - Component Flow

- This component calls the API based on the input given by the user.
- The API accepts a query parameter `q` which holds the query's input value.
- I am using [Reddit's Search API](https://www.reddit.com/search.json) for this component.
- When items are being fetched, we should `loading` to the user.
- Once the response comes from the API, all strings from the response are displayed in the list.
- The strings are displayed in the same order they arrive from the API call.
- In order to avoid sending too many requests i.e, we do not want to send requests on every keypress! 
- So, we `debounce` the requests with a time-out of `500 ms`.
- When items are being fetched, no request has been sent or endpoint has returned zero items, the component 
  will not be re-rendered.
  
### #2 - DEMO

![](https://github.com/mansi-manhas/react-autocomplete-autosuggestion-component/blob/main/auto-suggestions.gif)

### Tech Stack

- [React.js](https://reactjs.org/) for creating interactive and component based UIs.
- [Node.js](https://nodejs.org/en/) for setting up the application environment.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for handling states and react features without creating a class.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
