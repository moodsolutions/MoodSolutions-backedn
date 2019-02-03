const db = require('../db/config');


const customer = {}

customer.getAll = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM customers;')
    .then((data) =>{
        res.locals.customers = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}


customer.find=(req,res,next)=>{
    db.one('SELECT * FROM customers WHERE id=$1;',[req.params.id])
    .then((data) =>{
        res.locals.customer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

customer.create = (req,res,next) =>{
    console.log('yey')
    db.one('INSERT INTO customers (name ,phone , email) VALUES ($1,$2,$3) RETURNING *;', [req.body.name,req.body.phone, req.body.email])
    .then((data) =>{
        res.locals.customer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

customer.update = (req,res,next) =>{
    db.one('UPDATE customers SET name=$1,email=$2,phone=$3,lat=$4,lon=$5,img=$6 WHERE id=$7 RETURNING id;',
    [req.body.name, req.body.email,req.body.phone,req.body.lat,req.body.lon,req.body.img])
    .then((data) =>{
        res.locals.customer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

customer.delete = (req,res,next) =>{
    db.manyOrNone('DELETE FROM customers WHERE id=$1;',[req.params.id])
    .then((data) =>{
        res.locals.customer = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

// customer.getSubscribed = (req,res,next) =>{
//     db.manyOrNone('SELECT * FROM school WHERE bakery_id=$1;', [req.user.id])
//     .then((data) =>{
//         res.locals.customer = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }





module.exports=customer;