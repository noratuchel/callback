import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import SearchBar from '../templates/SearchBar';
import {
  Button,
  Container,
  Image,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import { AuthContext } from "../Auth.js";
import app from "../base.js";
import logo from "../logo.png";

const Navigation = (props) => {
  const [hideFixedMenu, sethideFixedMenu] = useState({ fixed: false });
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setRedirectToLogin(false);
  }, []);

  return (
    <Visibility
      once={false}
      onBottomPassedReverse={() => sethideFixedMenu({ fixed: true })}
    >
      {redirectToLogin ? <Redirect to="/login" /> : ""}
      <Segment
        inverted
        textAlign="center"
        style={{ padding: "1em 0em" }}
        vertical
      >
        <Menu
          fixed={hideFixedMenu.fixed ? "top" : null}
          inverted
          pointing={!hideFixedMenu.fixed}
          secondary={!hideFixedMenu.fixed}
          size="large"
        >
          <Container>
            <Menu.Item className="logo" as="a" href="/">
              <Image src={logo} size="large" />
            </Menu.Item>
            <Menu.Item as="a" href="/" active>
              Startseite
            </Menu.Item>
            <Menu.Item as="a">Seiten</Menu.Item>
            <Menu.Item as="a">User</Menu.Item>
            <Menu.Item as="a">Hilfe</Menu.Item>

            <Menu.Item position="right">
              <SearchBar />
              {currentUser ? (
                <Button as="a" inverted onClick={() => app.auth().signOut()}>
                  Logout
                </Button>
              ) : (
                <Button
                  as="a"
                  inverted
                  onClick={() => setRedirectToLogin(true)}
                >
                  Anmelden
                </Button>
              )}
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
};

export default Navigation;
