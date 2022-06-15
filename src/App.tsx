import routes from './utilities/routes';
import { auth } from './utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from './components/Header';
import Router from './components/Router';
import MobileApp from './containers/MobileApp';
import Language from './components/Language';
import Footer from './components/Footer';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header user={user} />

      <main>
        <div className="desktop-content">
          <Router routes={routes} />
        </div>

        <div className="mobile-content">
          <MobileApp />
        </div>
      </main>

      <Language />

      <Footer />
    </>
  );
}

export default App;
function initializeApp(firebaseConfig: { apiKey: string | undefined; authDomain: string | undefined; databaseURL: string | undefined; projectId: string | undefined; storageBucket: string | undefined; messagingSenderId: string | undefined; appId: string | undefined; measurementId: string | undefined; }) {
  throw new Error('Function not implemented.');
}

