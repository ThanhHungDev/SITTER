const node_validator = require('node-input-validator')

var { Validator } = node_validator


module.exports.VALIDATE_CREATE_CHANNEL = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        
        localUserId        : "required",
        referenceUserId    : "required",
        refesh             : "required",
    },{
        'localUserId.required'        : "userId is required",
        'referenceUserId.required'    : "userId is required",
        'refesh.required'             : "refesh is valid"
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}