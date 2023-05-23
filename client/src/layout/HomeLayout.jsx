import './homeLayout.css'
import { Nav } from '../components/Nav/nav';
import { Filter } from "../pages/Filter";
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <>
      <header>
        <Nav/>
      </header>
      <main className='main-page'>
        <Outlet />
      </main>
    </>
  );
};
