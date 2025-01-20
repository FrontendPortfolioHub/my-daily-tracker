import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { Todo } from './pages/Todo';
import { Fitness } from './pages/Fitness';
import { Statistic } from './pages/Statistic';
import { Timer } from './pages/Timer';
import { Weight } from './pages/Weight/Weight';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Todo />} />
        <Route path='fitness' element={<Fitness />} />
        <Route path='statistic' element={<Statistic />} />
        <Route path='weight' element={<Weight />} />
        <Route path='timer' element={<Timer />} />
      </Route>
    </Routes>
  </Router>
);
