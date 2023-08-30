const db = require("../config");
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require("../middleware/AuthenticateUser")

class Products{
    fetchProducts(req,res){
        const query =` SELECT prodID, prodName, prodPrice, prodQuan, prodDesc, prodCatergory, prodUrl FROM Products;`
        db.query(query,(err, results)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }

    fetchProduct(req, res) {
        const query = `
        SELECT prodID, prodName, prodPrice, prodQuan, prodDesc, prodCatergory, prodUrl FROM Products WHERE prodID = ${req.params.id};
        `
        db.query(query,(err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
      }
}

module.exports = Products