import React, { useContext } from "react"
import diamond from '../../images/diamond.png'
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserContext } from "../../App";
const { Header } = Layout;

function NavBar() {
  const { user, setUser, firebaseAuth } = useContext(UserContext);
  function signOut() {
    firebaseAuth.signOut() // actually signs out the user out of firebase
      .then(() => {
        setUser(null);
        localStorage.setItem("user", null);
      })
      .catch((error) => console.log(error))
  }
  return (
    <Header>
      <img
        className="image-logo"
        alt="diamond-logo"
        src={diamond}
        width="50"
        height="50"
      />
      <a href="#" class="logo">HODLGOOD</a>
      <Menu>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        {user ? (
          <Menu.Item key="4" onClick={() => signOut()}>
            Logout
          </Menu.Item>
        ) : (
          <>
            <Menu.Item key="4">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  )
}

{/* <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#fcb900" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="20" ></div> */ }


export default NavBar