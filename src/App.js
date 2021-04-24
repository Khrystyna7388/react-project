import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {
    Header,
    ProductDetailsPage,
    Products,
    CartPage,
    WishlistPage,
    Categories,
    ElectronicCategory, JeweleryCategory, MenClothingCategory, WomanClothingCategory
} from "./components";



const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Categories/>

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
                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/wishlist">
                        <WishlistPage/>
                    </Route>
                    <Route path="/electronics">
                        <ElectronicCategory/>
                    </Route>
                    <Route path="/jewelery">
                        <JeweleryCategory/>
                    </Route>
                    <Route path="/men-clothing">
                        <MenClothingCategory/>
                    </Route>
                    <Route path="/woman-clothing">
                        <WomanClothingCategory/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
