var express = require('express');
var router = express.Router();


//var dataCardBike = [];


/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.session.dataCardBike);
  if(req.session.dataCardBike == undefined) {
    req.session.dataCardBike = [];
  }
  var dataBike = [
                    {name: "Model BIKO45", url:"/images/bike-1.jpg", price: 679},
                    {name: "Model ZOOK7", url:"/images/bike-2.jpg", price: 799},
                    {name: "Model LIKO89", url:"/images/bike-3.jpg", price: 839},
                    {name: "Model GEWO", url:"/images/bike-4.jpg", price: 1206},
                    {name: "Model TITAN5", url:"/images/bike-5.jpg", price: 989},
                    {name: "Model AMIG39", url:"/images/bike-6.jpg", price: 599}
                 ];


  res.render('index', {dataBike: dataBike});
});

router.post('/add-card', function(req, res, next) {
  console.log(req.body);
  req.session.dataCardBike.push(req.body);
  res.render('card', { dataCardBike: req.session.dataCardBike});
})

router.post('/update-card', function(req, res, next) {
  console.log(req.body);
  req.session.dataCardBike[req.body.position].quantity = req.body.quantity;
  res.render('card', { dataCardBike: req.session.dataCardBike  });
})

router.get('/delete-card', function(req, res, next) {
  console.log(req.body);
  req.session.dataCardBike.splice(req.query.position, 1);
  res.render('card', { dataCardBike : req.session.dataCardBike });
})

router.get('/card', function(req, res, next) {

  /*var totalCmd = 0;
  for(var i=0; i<dataCardBike.length; i++) {
    dataCardBike[i].total =  dataCardBike[i].price * dataCardBike[i].quantity;
    totalCmd = totalCmd + dataCardBike[i].total;
  }*/
  res.render('card', { dataCardBike: req.session.dataCardBike });
});

module.exports = router;
