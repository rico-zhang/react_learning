import dva from "dva";
import App from "./App";
import counter from "./models/counter";

const app = dva();
app.model(counter);
app.router(() => <App />);
app.start("#root");
