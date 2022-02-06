const { Router } = require('express');
const itemsRouter = Router();

itemsRouter.get('/',async (req,res)=>{
    const q=req.query.q;
    try{
        res.send(q);
    }     
    catch(e){   
         res.send("No hay ningun item "+e);}
});

itemsRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);    
    try {
        res.send(id.toString());
    }
    catch(e){   
        res.send("No existe el id "+e);}
});

module.exports=itemsRouter;
