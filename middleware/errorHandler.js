const {Constants} = require('../constant')
const errorHandler = (err,req,res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode){
        case Constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace:err.stack,
            })
        case Constants.NOT_FOUND: 
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack
            })
        case Constants.FORBIDDEN:
            res.json({
                title:"Forbiden",
                message:err.message,
                stackTrace:err.stack
            })
        case Constants.UNAUTHORIZED:
            res.json({
                title:"UnAuthorized",
                message:err.message,
                stackTrace:err.stack
            })
        case Constants.SEVER_ERROR:
            res.json({
                title:"Server Error",
                message:err.message,
                stackTrace:err.stack
            })
        
            default:
                console.log("no error")
                break;
    }
}

module.exports = errorHandler;