import { ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface IProps {
  routes: Array<{
    name: string,
    path: string,
    element: ReactNode
  }>
};

const Router = (props: IProps) => {
  const location = useLocation();

  return(
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <Routes location={location} key={location.pathname}>
        {props.routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
