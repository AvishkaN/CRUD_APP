import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{  
        showOverlay:true, 
        showAddProductComp:true,   


    },
    reducers:{

        ShowOverlayFN:(state)=>{     

            state.showOverlay=true;   

        },


        ShowAddProductFN:(state)=>{     

            state.showAddProductComp=true;   

        },

        
        ShowHideAllFN:(state)=>{     

            state.showOverlay=false;  
            state.showAddProductComp=false;  



        },



     

    }
});



export const {
                            ShowOverlayFN,
                            ShowHideAllFN,

                            ShowAddProductFN,

                                                                        } =clickSlice.actions; 


//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

