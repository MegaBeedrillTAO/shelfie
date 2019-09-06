function getProducts(req, res){
    const dbInst = req.app.get('db');
    dbInst.getInventory()
    .then(products => res.status(200).send(products))
    .catch(err =>{
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
    })
    
}

function createProduct(req, res){
    const dbInst = req.app.get('db');
    const {image_url, name, price} = req.body;
    dbInst.createItem([image_url, name, price])
    .then(() => res.sendStatus(200))
    .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
}


module.exports ={
    getProducts
}