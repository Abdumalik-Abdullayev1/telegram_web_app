import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Bar from './components/bar'
import Header from './components/header'

const App = () => {
  const location = useLocation();
  const hideBarRoutes = ['/detail', '/categories'];
  const shouldHideBar = hideBarRoutes.some(path => location.pathname.startsWith(path));

  return (
    <>
      <Header />
      <Outlet />
      {!shouldHideBar && <Bar />}
    </>
  )
}

export default App;
