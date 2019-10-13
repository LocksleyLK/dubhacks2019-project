import React from "react";
import logo from "./transparantColoredLogo.png";
import "./App.css";

import { Button, Breadcrumb, Layout, Menu } from "antd";

import Gallery from "./Gallery";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const { Header, Content, Footer } = Layout;

let places = [
  { title: "Ballard, Washington", description: "", path: "./images/Ballard.jpg" },
  { title: "Magnolia, Washington", path: "./images/Magnolia.jpg" },
  { title: "North Seattle, Washington", path: "./images/North.jpg" },
  { title: "Our Bishop Church, Lake Union, Washington", path: "./images/OurBishopLakeUnion.jpg" },
  { title: "Our Lady Church, East Seattle, Washington", path: "./images/OurLadyEast.jpg" },
  { title: "Southwest, Seattle", path: "./images/Southwest.jpg" },
  { title: "St George Church, Rainier Valley, Washington", path: "./images/StGeorgeRainierValley.jpg" },
  { title: "Wallingford, Washington", path: "./images/Wallingford.png" }
];

class App extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    console.log(user);

    // if (!user) {
    //   signInWithGoogle();
    // }

    return (
      <div className="App">
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%", textAlign: "right" }}>
            {/* <div className="logo" /> */}
            {/* <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
            <span style={{ color: "#ffffff", marginRight: 12 }}>
              {user ? `Hello, ${user.displayName}` : `Please sign in.`}
            </span>
            {user ? (
              // <div>
              <Button onClick={signOut}>Sign out</Button>
            ) : (
              // </div>
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            )}
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            {/* <header className="App-header"> */}
            <div style={{ textAlign: "center" }}>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            {/* </header> */}
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              {user ? <Gallery data={places} /> : <strong>Please sign in.</strong>}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Created at Dubhacks 2019</Footer>
        </Layout>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
