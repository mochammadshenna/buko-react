import { Outlet } from "react-router-dom";
import NavBar from '../organism/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
