import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Header, ProductDetailsPage, Products} from "./components";

const App = () => {
    return (
        <div>
            <Router>
                <Header/>


                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/products"/>
                    </Route>
                    <Route path="/products" exact>
                        <Products/>
                    </Route>
                    <Route path="/products/:id">
                        <ProductDetailsPage/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
