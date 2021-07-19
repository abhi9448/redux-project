import "./App.css";
import UserForm from "./components/UserForm";
import { Provider } from "react-redux";
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
