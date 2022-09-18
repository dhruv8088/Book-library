import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
// outlet is used in parent route elements to render their child route elements.

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home