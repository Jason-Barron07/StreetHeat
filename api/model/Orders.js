const db = require("../config");

class Orders {
    
  fetchOrders(req, res) {
    const query = `SELECT orderID, userID, prodID, prodQuan FROM Orders;`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchCart(req, res) {
    const query = `SELECT prodName, prodPrice, prodUrl FROM Users INNER JOIN Orders ON Users.userID = Orders.userID INNER JOIN Products ON Orders.prodID = Products.prodID WHERE Orders.userID = Users.userID;`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  addToCart(req, res) {
    const query = `INSERT INTO Orders SET ?`;

    db.query(query, [req.body], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Product added to cart!",
      });
    });
  }

  updateCart(req, res) {
    const query = `UPDATE Orders SET ? WHERE orderID = ?;`;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Order updated!",
      });
    });
  }

  clearCart(req, res) {
    const query = `DELETE FROM Orders WHERE userID = ${req.params.id};`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Cart cleared!",
      });
    });
  }

  removeFromCart(req, res) {
    const query = `DELETE FROM Orders WHERE prodID = '${req.params.id}';`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Item removed from cart!",
      });
    });
  }
}

module.exports = Orders;