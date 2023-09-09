const db = require("../config");


class Products{
    fetchProducts(req,res){
        const query =` SELECT prodID, prodName, prodPrice, prodQuan, prodBrand, prodCatergory, prodUrl FROM Products;`
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
        SELECT prodID, prodName, prodPrice, prodQuan, prodBrand, prodCatergory, prodUrl FROM Products WHERE prodID = ${req.params.id};
        `
        db.query(query,(err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
      }

      addProduct(req, res) {
        const query = `
            INSERT INTO Products
            SET ?;
        `
        db.query(query, [req.body],
             (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Product Added "
            })
        })
    };

    updateProducts(req,res){
        const query = `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `
        db.query(query,
             [req.body, req.params.id],
             (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Update Complete"
                })
             })
      }

      deleteProducts(req, res) {
        const query = `DELETE FROM Products WHERE prodID = ?;
        `
        db.query(query, [req.params.id],(err, results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results,
                msg: "Product Removed"
            })
        })
      }

}

module.exports = Products