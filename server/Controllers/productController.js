import productModel from "../Models/productModel.js"; 

export const getAllProducts=async(req,res)=>{

    try{
        const allProducts=await productModel.find();

        res.status(200).json(allProducts);
        
    }catch(err){  
        res.status(404).json({message:err.message});  

    }


};  


export const createProduct=async(req,res)=>{  

    const product=req.body;
    console.log(product);  

    const newProduct=new productModel(product);

    try{
        await newProduct.save();

        res.status(201).json(newProduct);
        
    }catch(err){  
        res.status(409).json({message:err.message});  

    }
};  