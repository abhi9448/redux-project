import "./App.css";
import UserForm from "./components/UserForm";
import { Provider } from "react-redux";
import store from './store'
import SimpleTabs from './components/tabsView';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SimpleTabs />
      </div>
    </Provider>
  );
}

export default App;
