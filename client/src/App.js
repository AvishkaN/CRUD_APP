import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";

// Pages 
import Nav from "./Components/Nav/Nav";

import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AllProductsPage from "./Pages/AllProductsPage/AllProductsPage";

import { selectProducts } from "./Redux/slices/productSlice";


const App=()=>{  

    const products=useSelector(selectProducts);

    return(
        <div className="app-wrapper">
            {console.log(products)}
                    <BrowserRouter>

                        <Routes>
                                {/* AllProducts */}
                                <Route path="/" element={ 
                                  <>
                                    <Nav></Nav>

                                    <AllProductsPage></AllProductsPage>


                                    </>
                                } />


                                {/* addProduct */}
                                <Route path="/addProduct" element={ 
                                <>

                                    <RegisterPage></RegisterPage>


                                </>
                                } />




                        </Routes>

                    </BrowserRouter>

        </div>
    )
};

export default App;


