import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const TestPage = () => {
//   const location = useLocation();
//   const match = useMatch('');
//   console.log(location);
//   console.log(match);
//   return <div>Test</div>;
// };

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/test/*" element={<TestPage />} />
//       </Routes>
//     </div>
//   );
// }

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/shop/hats" element={<HatsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
