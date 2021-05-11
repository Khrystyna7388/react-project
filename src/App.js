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
    Select,
    BlackDiv,
    CategoryComponent
} from "./components";
import {SortComponent} from "./components/sort/SortComponent";

const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <BlackDiv/>
                <Select/>

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
                        <CategoryComponent category={'electronics'}/>
                    </Route>
                    <Route path="/categories/jewelery">
                        <CategoryComponent category={'jewelery'}/>
                    </Route>
                    <Route path="/categories/men-clothing">
                        <CategoryComponent category={'men\'s clothing'}/>
                    </Route>
                    <Route path="/categories/woman-clothing">
                        <CategoryComponent category={'women\'s clothing'}/>
                    </Route>

                    <Route path="/asc">
                        <SortComponent sortType={'asc'}/>
                    </Route>

                    <Route path="/desc">
                        <SortComponent sortType={'desc'}/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;

