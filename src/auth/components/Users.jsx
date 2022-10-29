import React from "react";
import { useSelector } from "react-redux";
import { userEmailSelector, userNameSelector } from "../store/authSelectors";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useSignout from "../hooks/useSignout";


const User = () => {
  const email = useSelector(userEmailSelector);
  const name = useSelector(userNameSelector);
  const disconnect =useSignout();

  return (
<Navbar>
<Container>
  <Navbar.Brand>Welcome to Star Wars React App</Navbar.Brand>
  <Navbar.Brand>{email}</Navbar.Brand>
  <Navbar.Brand>{name}</Navbar.Brand>
      <Nav>
          <Nav.Link as={Button} onClick={disconnect}>
            Sing out
          </Nav.Link>
      </Nav>
</Container>
</Navbar>
  );
};

export default User;
