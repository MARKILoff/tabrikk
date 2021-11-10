import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from './pages/TopBar'
import About from './pages/About'
import Header from './Header'
import Test from './pages/Test';
import "tailwindcss/tailwind.css"


const App = () => {
  const user = true
  return (
    <>
      <Header />
      <Test />
      <Router>
        <TopBar user={user} />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/about">
            {user ? <About /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Login /> : <Register />}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
      {/* <div>
        <StripeCheckout
          name="Sirojiddin shop"
          image="https://avatars.githubusercontent.com/u/1486366?v=4"
          billingAddress
          shippingAddress
          amount={100}
        >
          <button>CHECKOUT NOW</button>
        </StripeCheckout>
      </div > */}
    </>
  )
}

export default App
