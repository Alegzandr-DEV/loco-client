import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInAnonymously,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from '../utilities/firebase';

interface IAuthContext {
  user: User | null | undefined,
  signUp: (email: string, password: string) => void,
  signIn: (email: string, password: string) => void,
  guestSignIn: () => void,
  resetPassword: (email: string) => void,
  logOut: () => void
};

interface IProps {
  children?: ReactNode
};

const AuthContext = createContext<IAuthContext>({
  user: null,
  signUp: (email: string, password: string) => {},
  signIn: (email: string, password: string) => {},
  guestSignIn: () => {},
  resetPassword: (email: string) => {},
  logOut: () => {}
});

export const AuthProvider: FC<IProps> = ({children}) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [loading, setLoading] = useState(true)

  const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  // appleSignIn
  // googleSignIn
  const guestSignIn = () => signInAnonymously(auth);
  const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);
  const logOut = () => signOut(auth);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser: User | null | undefined) => {
      setUser(currentUser);
      return setLoading(false);
    });
  }, []);

  const value: IAuthContext = {
    user,
    signUp,
    signIn,
    guestSignIn,
    resetPassword,
    logOut
  };

  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
