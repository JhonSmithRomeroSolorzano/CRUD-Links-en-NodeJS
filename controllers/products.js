const {products} = require ('../db.json');

module.exports = {
    getProduct:(req,res) =>{
        console.log(products);
        res.json({products})

    },
    addProduct:(req,res) =>{
        const {name} = req.body;
        products.push({
            name,
            id: products.length
        })
        console.log('Recibir datos ');
        res.json({
            'Recibido ' : req.body.name,
            'Status': true
        });
    },
    updateProduct:(req,res)=>{
        const {id} = req.params;
        const {name} = req.body;

        products.forEach((product,i) =>{
            if(product.id=== Number(id)){
                product.name = name;
            }

        })
        console.log('Actualizando datos ');
        res.json({
            'Actualizado  ' : req.body.name,
            'Status': true
        });
    },
    deleteProduct:(req,res)=>{
        const {id} = req.params;
        products.forEach((product,i) =>{
            if(product.id=== Number(id)){
                products.splice(i,1);
            }

        })
        console.log('Borrando datos ');
        res.json({
            'Borrando  ' : req.body.name,
            'Status': true
        });
    }
}