const { Router } = require('express');
const itemsRouter = Router();

const { meliQuery,meliParamId,meliDescriptionId } = require('../services/endpoints');

itemsRouter.get('/',async (req,res)=>{
    const q=req.query.q;
    try {
        const response = await meliQuery(q);
        const categories = response.filters[0].values?response.filters[0].values[0].path_from_root.map((cat) => cat.name):response.available_filters[0].values[0].path_from_root.map((cat) => cat.name);
        const items = response.results.map((item) => {
            return {
                id: item.id,
                title:item.title,
                price: {
                    curency:item.prices.prices[0].currency_id,
                    amount:Math.trunc(item.price),
                    decimals:item.price-Math.trunc(item.price)
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            }
        })
        
        const results = {
            author: {
                name: "Wendy",
                lastname: "Estevez"
            },
            categories: categories,
            items: items
        }
        
        res.send(results);
    }     
    catch(e){   
         res.send("No hay ningun item "+e);}
});

itemsRouter.get('/:id', async (req, res) => {
    const id = req.params.id;    
    try {
        const response = await meliParamId(id);
        const description = await meliDescriptionId(id);
        const price = Math.trunc(response.price);
        const decimals = response.price - price;
        
        const item = {
            author: {
            name: "Wendy",
            lastname: "Estevez"
            },
            item: {
                id: response.id,
                title: response.title,
                price: {
                    currency: response.currency_id,
                    amount: price,
                    decimals: decimals,
                },
                picture: response.pictures[0].url,
                condition: response.condition,
                free_shipping: response.shipping.free_shipping,
                sold_quantity: response.sold_quantity,
                description: description.plain_text
            },
        }

        res.send(item);
    }
    catch(e){   
        res.send("No existe el id "+e);}
});

module.exports=itemsRouter;
