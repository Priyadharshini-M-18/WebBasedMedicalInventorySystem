var express = require('express');
const stock= require('../src/user/Stock');

var Controller = require('../src/user/Controler');
const router = express.Router();

router.route('/addOrder').post(Controller.createOrderControllerFn);
router.route('/removeOrder').post(Controller.delOrderFn);
router.route('/getOrders').get(Controller.getOrderConntrollerfn);
router.route('/user/getAll').get(Controller.getDataConntrollerfn);
router.route('/user/getAllUser').get(Controller.getUserConntrollerfn);
router.route('/login').post(Controller.loginUserControllerFn);
router.route('/create').post(Controller.createControllerFn);
router.route('/addStock').post(Controller.createStockFn);
router.route('/addSold').post(Controller.createSoldFn);
router.route('/remove').post(Controller.delStockFn);
router.route('/removeSold').post(Controller.delSoldFn);
router.route('/getStockByID').post(Controller.getDataByIDConntrollerfn);
router.route('/getSold').post(Controller.getDataByStockIDConntrollerfn);

module.exports = router;
