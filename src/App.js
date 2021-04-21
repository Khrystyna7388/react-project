import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header, ProductDetails, Products} from "./components";

const App = () => {
    return (
        <div>
            <Router>
                <Header/>


                <Switch>
                    <Route path="/products" exact>
                        <Products/>
                    </Route>
                    <Route path="/products/:id">
                        <ProductDetails/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
