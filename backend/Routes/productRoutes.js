const express = require('express');
const router = express.Router();
const Product = require ('../models/Product');

router.post('/add',async(req,res)=>{
    try{
        const {name,price,description,imageUrl}=req.body;
        const newProduct = new Product({name,price,description,imageUrl});
        await newProduct.save();
        res.status(201).json({message:'Product added Successfully'});
    } catch(error){
        res.status(500).json({error:'Failed to add product'});
    }
});
    router.get('/',async(req,res)=>{
        try{
            const products = await Product.find();
            res.json(products);
        } catch(error){
            res.status(500).json({error:'Failed to fetch products'});
        }
    });
   

    module.exports = router;
