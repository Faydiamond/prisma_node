import { Router } from "express";
import  prisma  from "../db.js"
const router = Router();

router.get("/categories" , async (req,res)=>{
    const categories = await prisma.category.findMany();
    res.json( categories )
    console.log("categories");
    
})

router.post("/categories" , async (req,res)=>{
    const newCategory = await prisma.category.create({
        data: req.body
    })
    res.json( newCategory )
})

router.get("/categories/:id" , async (req,res)=>{
    const categoriesFound = await prisma.category.findFirst({
        where :{
            id: parseFloat( req.params.id)
        },
        include: {
            products: true,
        }
    });
    if (!categoriesFound) return  res.status(404).json({ error: "Category not found" })
    res.json(categoriesFound)
})

router.delete("/categories/:id" , async (req,res)=>{
    const categorytDeleted = await prisma.category.delete({
        where :{
            id: parseFloat( req.params.id)
        }
    });
    if (!categorytDeleted) return  res.status(404).json({ error: "Category not found" })
    res.json(categorytDeleted)
})

router.patch("/categories/:id" , async (req,res)=>{
    const categorytUpt = await prisma.category.update({
        where :{
            id: parseFloat( req.params.id)
        },
        data: req.body
    });
    if (!categorytUpt) return  res.status(404).json({ error: "Category not found" })
    res.json(categorytUpt)
})

export default router;