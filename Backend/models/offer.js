const db = require('../db/config');

const offer ={}

offer.getAll = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM offers;')
    .then((data) => {
        res.locals.offers = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}
// offer.getProviderOffer=(req,res,next)=>{
//     db.manyOrNone('SELECT offers.*,providers.* FROM offers,providers WHERE offers.customer_id= customers.id AND offers.provider_id=providers.id')
//     .then((data) => {
//         res.locals.offer = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }


offer.find=(req,res,next)=>{
    db.one('SELECT * FROM offers WHERE id=$1;',[req.params.id])
    .then((data) =>{
        res.locals.offer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

offer.findProviderOffer=(req,res,next)=>{
    db.one('SELECT providers.* , offers.* FROM providers, offers where offers.provider_id=providers.id and providers.id=$1;',[req.params.id])
    .then((data) =>{
        res.locals.offer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

offer.create = (req,res,next) =>{

    db.one('INSERT INTO offers ( offer,img,provider_id,customer_id,place_id) VALUES ($1,$2,$3,$4) RETURNING *;', 
    [req.body.offer,req.body.img,req.body.provider_id, req.body.customer_id])

    .then((data) =>{
        res.locals.offer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

offer.getProviderOffer = (req,res,next) => { 
     
    console.log("\n\n\n getProviderOffer")
    db.manyOrNone('SELECT * FROM offers where id= $1', [req.user.id])
    .then((data) =>{
        console.log(data)
        res.locals.offer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

// offer.getBakerProduct = (req,res,next) => { 
// console.log(req.params.id);
//     console.log("\n\n\n\n\n\n getProviderOffer")
//     db.manyOrNone('SELECT * FROM offers where providers_id= $1;', [req.params.id])
//     .then((data) =>{
//         res.locals.offer = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }



offer.delete = (req,res,next)=>{
    db.none('DELETE FROM offers WHERE id=$1;', [req.params.id])
    .then((data)=>{
        next();
    })
    .catch((error) =>{
        console.log(error);
        next();
    })
}
offer.update = (req,res,next)=>{
    db.one('UPDATE offers SET offer=$1,img=$2,provider_id=$3,customer_id=$4 WHERE id=$5 RETURNING *;', [req.body.offer,req.body.img,req.body.provider_id,req.body.customer_id])
    .then((data)=>{
        res.locals.offer=data;
        next();
    })
    .catch((error) =>{
        console.log(error);
        next();
    })
}



module.exports=offer;
