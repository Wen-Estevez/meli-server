module.exports = {
    meliQuery: async function (query) {
        try {
            const search = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            return search;
        }
        catch (e) {
            console("Error en la query " + e);
        }
    },
    meliParamId: async function (id) {
        try {
            const search = await fetch(`https://api.mercadolibre.com/items/${id}`)
            return search;
        }
        catch (e) {
            console("Error en la busqueda por id " + e);
        }
    },
    meliDescriptionId: async function (id) {
        try {
            const search = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
            return search;
        }
        catch (e) {
            console("Error en la busqueda de descripcion" + e);
        }
    }
};
