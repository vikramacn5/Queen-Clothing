import { Component } from 'react';

import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

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

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          // gives the snapshot when modified also gives the initial state of the data.
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
          {/* <Route path="/shop/hats" element={<HatsPage />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
