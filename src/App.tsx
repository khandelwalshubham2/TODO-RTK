import { Provider } from "react-redux";
import "./App.css";
import Controls from "./component/Controls";
import Heading from "./component/Heading";
import ItemsList from "./component/ItemsList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container list-container">
        <Heading></Heading>
        <Controls></Controls>
        <ItemsList></ItemsList>
      </div>
    </Provider>
  );
}

export default App;
