module.exports= (req,res,next)=>{
    return res.status(404).send({staus: 404, message:"Resourse not found"});
}