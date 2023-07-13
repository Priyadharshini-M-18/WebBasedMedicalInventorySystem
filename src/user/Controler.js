 var Service = require('./Services');

var createControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await Service.createDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": " created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}




var createOrderControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await Service.createOrder(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Music created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}


var createStockFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await Service.createStock(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Music created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var createSoldFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await Service.createSold(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Music created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var delStockFn = async (req, res) =>
{
    var result = null;
    try {
        
        result = await Service.delStock(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var delOrderFn = async (req, res) =>
{
    var result = null;
    try {
        
        result = await Service.delOrder(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var delSoldFn = async (req, res) =>
{
    var result = null;
    try {
        
        result = await Service.delSold(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await Service.loginuserDBService(req.body);
        if (result.status) {
            
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await Service.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var getUserConntrollerfn = async (req, res) =>
{
    var empolyee = await Service.getUserFromDBService();
    res.send({ "status": true, "data": empolyee });
}


var getDataByIDConntrollerfn = async (req, res) =>
{
    console.log(req.body);
    var empolyee = await Service.getDataByIdDBService(req.body);
    res.send({ "status": true, "data": empolyee  });
}

var getDataByStockIDConntrollerfn = async (req, res) =>
{
    console.log(req.body);
    var empolyee = await Service.getDataByStockIDService(req.body);
    res.send({ "status": true, "data": empolyee  });
}
var getOrderConntrollerfn = async (req, res) =>
{
    console.log(req.body);
    var empolyee = await Service.getOrderService(req.body);
    res.send({ "status": true, "data": empolyee  });
}

module.exports = { createControllerFn,delOrderFn,getUserConntrollerfn,getDataByStockIDConntrollerfn,createSoldFn,delSoldFn,getOrderConntrollerfn,createOrderControllerFn,getDataConntrollerfn,loginUserControllerFn,createStockFn,delStockFn,getDataByIDConntrollerfn};