import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {createPost, fetchPost} from './../../Api/Api';



export const fetchAllProducts=createAsyncThunk('posts/getPosts',async()=>{

    const data=await fetchPost();
    // console.log(data);

    return data.data; 


});


export const createProduct=createAsyncThunk('posts/createProducts',async(productDetails)=>{

  try{
    const data=await createPost(productDetails);
    // console.log(productDetails);
    // console.log(data);
    return data.data; 

  }catch(error){
      console.log(error);
  
  }


});

 
const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
    
      status: null,
    },
    extraReducers: {

      // FETCH
      [fetchAllProducts.pending]: (state, action) => {
        state.status = 'loading'

      },
      [fetchAllProducts.fulfilled]: (state, { payload }) => {
        state.products = payload
        state.status = 'success'
      },
      [fetchAllProducts.rejected]: (state, action) => {
        state.status = 'failed'
      },



      // CREATE
      [createProduct.pending]: (state, action) => {
        state.status = 'loading'
      },
      [createProduct.fulfilled]: (state, { payload }) => {
        state.products = [ ...state.products ,payload];
        state.status = 'success';
      },
      [createProduct.rejected]: (state, action) => {
        state.status = 'failed'
      },



    },
  });






//selectors
export const selectProducts=(state)=>state.products;

export default productSlice.reducer;





