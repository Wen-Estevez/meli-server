const axios = require('axios');

module.exports = {
    meliQuery: async function (query) {
        try {
            const search = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            return search.data;
        }
        catch (e) {
            console.log("Error en la query " + e);
        }
    },
    meliParamId: async function (id) {
        try {
            const search = await axios.get(`https://api.mercadolibre.com/items/${id}`)
            return search.data;
        }
        catch (e) {
            console.log("Error en la busqueda por id " + e);
        }
    },
    meliDescriptionId: async function (id) {
        try {
            const search = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
            return search.data;
        }
        catch (e) {
            console.log("Error en la busqueda de descripcion" + e);
        }
    }
};
