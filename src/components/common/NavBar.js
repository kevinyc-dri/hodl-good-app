import React from "react"
import diamond from '../../images/diamond.png'
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

function NavBar() {
  return (
    <>
      <Header>
        <img
          className="image-logo"
          alt="diamond-logo"
          src={diamond}
          width="50"
          height="50"
        />
        <a href="#" class="logo">HODLGOOD</a>
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="4">
            Logout
            </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#fcb900" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="20" ></div>
      </Header>
    </>
  )
}

export default NavBar