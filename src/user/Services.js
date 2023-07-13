var Model = require('./Model');

var stock=require('./Stock');
var order=require('./Orders');
var sold=require('./Sold');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createDBService = (Details) => {


   return new Promise(function myFn(resolve, reject) {

       var ModelData = new Model();

       ModelData.name = Details.name;
       ModelData.email = Details.email;
       ModelData.password = Details.password;
       

       ModelData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

module.exports.createStock = (Details) => {


   return new Promise(function myFn(resolve, reject) {

       var stockData = new stock();

       stockData.name = Details.name;
       stockData.id = Details.id;
       stockData.quantity = Details.quantity;
       stockData.sold=Details.sold;
       stockData.amount = Details.amount;
       stockData.man_date= Details.man_date;
       stockData.exp_date = Details.exp_date;
       

       stockData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
        });
        
    });
}

module.exports.createOrder= (Details) => {


   return new Promise(function myFn(resolve, reject) {

       var orderData = new order();
       orderData.email=Details.email;
       orderData.order_prd_name = Details.order_prd_name;
       orderData.order_prd_qnty = Details.order_prd_qnty;
       orderData.order_cost = Details.order_cost;
       orderData.paid_status=Details.paid_status;
       orderData.date=Details.date;
       

       orderData.save(function resultHandle(error, result) {

           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });

   });

}

module.exports.createSold= (Details) => {


    return new Promise(function myFn(resolve, reject) {
 
        var orderData = new sold();
        orderData.prd_id=Details.prd_id;
        orderData.prd_qnty = Details.prd_qnty;
        orderData.sold = Details.sold;
        
 
        orderData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }

module.exports.delStock = (Details)=>
{
   
   return new Promise(function myFn(resolve, reject)
   {
      
      stock.deleteOne({id:Details.id}).then(function getresult(result,errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild "});
            console.log({status: false, msg: "Invaild "});
         }
         else
         {
            
                  resolve({status: true,msg: "deleted Successfully"});
                  console.log({status: false, msg: "deleted successfully"});
              
         }
            
      });
      
   });
}

module.exports.delOrder = (Details)=>
{
   
   return new Promise(function myFn(resolve, reject)
   {
      
      order.deleteOne({email:Details.email},{name:Details.name}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild "});
            console.log({status: false, msg: "Invaild "});
         }
         else
         {
            
                  resolve({status: true,msg: "deleted Successfully"});
                  console.log({status: true, msg: "deleted successfully"});
              
         }
            
      });
      
   });
}
module.exports.delSold = (Details)=>
{
   
   return new Promise(function myFn(resolve, reject)
   {
      
      sold.deleteOne({prd_id:Details.prd_id}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild "});
            console.log({status: false, msg: "Invaild "});
         }
         else
         {
            
                  resolve({status: true,msg: "deleted Successfully"});
                  console.log({status: false, msg: "deleted successfully"});
              
         }
            
      });
      
   });
}



module.exports.loginuserDBService = (Details)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      Model.findOne({ email: Details.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               
 
               if(result.password== Details.password)
               {
                  resolve({status: true,msg: "Validated Successfully"});
                  if(result.email=="admin@gmail.com"){
                     resolve({status: true,msg: "Validated Successfully"});

                  }
               }
               else
               {
                  reject({status: false, msg: "Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Error Detailssss"});
            }
 
         }
      
      });
      
   });
}



module.exports.getDataByIdDBService = (Details) => {
 
   return new Promise(function myFn(resolve, reject) {
       stock.findOne({id:Details.id}, function getresult(error, result) {
           if (error) {
               reject(false);
           } else {
               console.log(result.quantity);
               resolve(result);
           }
       });
   });
}
module.exports.getDataByStockIDService = (Details) => {
 
    return new Promise(function myFn(resolve, reject) {
        sold.findOne({prd_id:Details.prd_id}, function getresult(error, result) {
            if (error) {
                reject(false);
            } else {
                
                resolve(result);
            }
        });
    });
 }
module.exports.getOrderService = () => {
 
    return new Promise(function myFn(resolve, reject) {
        order.find({}, function getresult(error, result) {
            if (error) {
                reject(false);
            } else {
                console.log("");
                resolve(result);
            }
        });
    });
 }

module.exports.getDataFromDBService = () => {
 
   return new Promise(function checkURL(resolve, reject) {
       stock.find({}, function returnData(error, result) {
           if (error) {
               reject(false);
           } else {
       
               resolve(result);
           }
       });
   });
}

module.exports.getUserFromDBService = () => {
 
    return new Promise(function checkURL(resolve, reject) {
        Model.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
        
                resolve(result);
            }
        });
    });
 }

