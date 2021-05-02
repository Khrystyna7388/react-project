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
    ElectronicCategory,
    JeweleryCategory,
    MenClothingCategory,
    WomanClothingCategory,
    SelectComponent,
    AscSortedProducts,
    DescSortedProducts
} from "./components";

const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <div style={{backgroundColor: 'black', height: '250px', width: '100%'}}>
                    <h2 style={{color:'white', textAlign: 'center', marginTop: 0, paddingTop: '100px'}}
                    >
                        The best way to predict your future is to create it
                    </h2>
                </div>
                <SelectComponent/>

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

                    <Route path="/asc=sort">
                        <AscSortedProducts/>
                    </Route>

                    <Route path="/desc=sort">
                        <DescSortedProducts/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;


// todo black div with text