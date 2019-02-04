const db = require('../db/config');
var bcrypt = require("bcrypt");
const provider ={}

provider.getAll = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM providers;')
    .then((data) => {
        res.locals.providers= data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

provider.find = (req,res,next) =>{
    // console.log(req.provider.id)
    db.one('SELECT * FROM providers where id =$1;', [req.params.id])
    .then((data) => {
        res.locals.provider = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

provider.create = (req,res,next) =>{
const salt = bcrypt.genSaltSync(10);
  db.one("INSERT INTO providers (name,email,password_digest,phone, img, placeID) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;",
    [
      req.body.name,
      req.body.email,
      bcrypt.hashSync(req.body.password, salt),
      req.body.password_digest,
      req.body.phone,
      req.body.img
        

    ]
  )
  .then((data) =>{
    req.provider=res;
    res.locals.provider = data;
    next();
})
    .then(function(result) {
    console.log("\n\n\n\n usercreate" , result )
      req.provider = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
}

provider.login = (req, res, next) => {
  db.one("SELECT * FROM providers WHERE email = $2;", [req.body.email])
  .then((data) =>{
    res.locals.provider = data;
    next();
})
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password_digest, res.password)) {
        req.provider = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

provider.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM providers WHERE email=$2;", [req.body.email])
    .then(function(result) {
      res.provider = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};
provider.update = (req,res,next) =>{
  db.one('UPDATE providers SET name=$1,email=$2,password_digest=$3,phone=$4,img=$5,placeID=$6 WHERE id=$7 RETURNING *;',
  [req.body.name, req.body.email,req.body.password_digest,req.body.phone,req.body.img, req.body.placeID])
  .then((data) =>{
      res.locals.provider = data;
      next();
  })
  .catch((error) => {
      console.log(error);
      next();
  })
}

provider.delete = (req,res,next) =>{
  db.manyOrNone('DELETE FROM providers WHERE id=$1;',[req.params.id])
  .then((data) =>{
      res.locals.provider = data;
      next();
  })
  .catch((error) => {
      console.log(error);
      next();
  })
}



module.exports=provider;