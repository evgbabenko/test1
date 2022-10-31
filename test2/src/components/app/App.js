import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams
} from "react-router-dom";
import DetaildeJob from '../detailed-job/detailedjob';

import JobList from '../job-list/job-list';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<JobList />} />
        {/* <Route path='/details'> */}
          <Route path="/:id" element={<DetaildeJob />} />
          {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
