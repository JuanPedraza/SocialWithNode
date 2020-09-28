exports.success = function(req,res,message, status){
    let statusCode = status || 200
    let statusMessages = message || '';
    res.status(status).send({
        error: false,
        status: statusCode,
        body: statusMessages
    })
}

exports.error = function (req,res,message, status){
    let statusCode = status || 500    
    let statusMessages = message || 'Internal server error';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessages
    })
        
}