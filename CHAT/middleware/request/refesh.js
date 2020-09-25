const node_validator = require('node-input-validator')

var { Validator } = node_validator


module.exports.VALIDATE_REFESH = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        userId: "required",
        refesh: "required",
        detect: "required",
    },{
        'userId.required': "userId is required",
        'refesh.required': "Refesh is valid",
        'detect.required': "detect is required",
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}