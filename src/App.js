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
    CategoriesButtons,
    ElectronicCategory, JeweleryCategory, MenClothingCategory, WomanClothingCategory, SortProducts
} from "./components";



const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <SortProducts/>
                {/*<CategoriesButtons/>*/}

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

                    <Route path="/categories/electronics">
                        <ElectronicCategory/>
                    </Route>
                    <Route path="/categories/jewelery">
                        <JeweleryCategory/>
                    </Route>
                    <Route path="/categories/men-clothing">
                        <MenClothingCategory/>
                    </Route>
                    <Route path="/categories/woman-clothing">
                        <WomanClothingCategory/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
