import React, { Fragment, useState } from "react";

import "../styles/quick-start.css";

import Button from "./Button";

export default function QuickStart() {
  return (
    <div>
      <Hello />
      <hr />
      <Button />
      <hr />
      <AboutPage />
      <hr />
      <Profile user={user} />
      <hr />
      <Login isLoggedIn={true} />
      <hr />
      <Product products={products} />
    </div>
  );
}

function Hello() {
  return <h1>Hello, React!</h1>;
}

function AboutPage() {
  return (
    <Fragment>
      <h1>About</h1>
      <p className="greetings">
        Hello there.
        <br /> How do you do?
      </p>
    </Fragment>
  );
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

function Login({ isLoggedIn }) {
  const [flag, setFlag] = useState(isLoggedIn);
  function handleClick() {
    setFlag(!flag);
  }

  return (
    <div>
      {flag ? <AdminPanel /> : <LoginForm />}
      <button onClick={handleClick}>Switch</button>
    </div>
  );
}

function AdminPanel() {
  return <div>Welcome to the admin system!</div>;
}

function LoginForm() {
  return <div>Please login.</div>;
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function Product({ products }) {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
