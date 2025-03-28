class apiError extends Error{
    
    // constructor(parameters) {assigning them values}
    
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
    )
    {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        // if(stack){
        //     this.stack = stack
        // } 
        // else{
        //     Error.captureStackTrace(this,this.constructor)
        // }
    }
}

export { apiError }