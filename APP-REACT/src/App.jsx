import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Login} from './components/Login';
import {CreateCount} from './components/CreateCount';

const App = [
    {path: "/login",component:Login},
    {path: "/createcount", component:CreateCount}

];

export default App;

