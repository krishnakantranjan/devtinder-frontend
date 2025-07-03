// import React from 'react';
// import Body from './components/Body';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Feed from './components/Feed';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import reduxStore from './utils/reduxStore';
// import Connections from './components/Connections';
// import Request from './components/Request';

// function App() {
//   return (
//     <Provider store={reduxStore}>
//       <BrowserRouter basename="/">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Body />}>
//             <Route index element={<Feed />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="connections" element={<Connections />} />
//             <Route path="request" element={<Request />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;

// import React from 'react';
// import Body from './components/Body';
// import Feed from './components/Feed';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Connections from './components/Connections';
// import Request from './components/Request';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import reduxStore from './utils/reduxStore';

// function App() {
//   return (
//     <Provider store={reduxStore}>
//       <BrowserRouter basename="/">
//         <Routes>
//           <Route path="/" element={<Body />}>
//             <Route index element={<Feed />} />
//             <Route path="login" element={<Login />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="connections" element={<Connections />} />
//             <Route path="request" element={<Request />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;

import React from 'react';
import Body from './components/Body';
import Feed from './components/Feed';
import Login from './components/Login';
import Profile from './components/Profile';
import Connections from './components/Connections';
import Request from './components/Request';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from './utils/reduxStore';
import SignUp from './components/SignUp';

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route index element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="request" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;