import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from "./App";
import { TodoContent } from "./components/TodoContent";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TodoContent />} />
      </Route>
    </Routes>
  </Router>
);
