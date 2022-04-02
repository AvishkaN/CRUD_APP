import styled from 'styled-components';
import Product from './Product';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, selectProducts } from '../../Redux/slices/productSlice';



function AllProductsPage({className=""}) {


  const dispatch=useDispatch();
  const ProductsSelector=useSelector(selectProducts);


  useEffect(()=>{

       //Scroll To Top
    ScrollWindowTop();

  },[])


  useEffect(()=>{

    console.log();
    dispatch(fetchAllProducts());

  },[dispatch])

  return (
    <DIV className={`${className}`}>

      <div className="all-products-wrapper">
         
        <div className="">

        {
              ProductsSelector.products.map(productData=>(
                  <Product  key={productData._id}  className=""  {...productData}>{"txt"}</Product>

              ))
        }

        </div>

        


      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .all-products-wrapper{

      width:var(--page-content-width);
      margin-left: auto;
      margin-right: auto;   

    }
    
    
 
`;

export default AllProductsPage;
