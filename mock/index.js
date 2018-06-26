module.exports = function(app) {
    app.use("/some/path", function(req, res) {
      res.json({
        code: 0,
        msg: "success",
        data: {
          total: 10,
          data: [{
            a: 1,
            b: 2,
          }],
          start: 1,
          limit: 10
        }
      });
    });
  };
  