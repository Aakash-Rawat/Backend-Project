// A status code is a three-digit number that a server sends in response to a request made by a client (like a browser or an app). It tells whether the request was successful, failed, or needs more action.

/*       RESPONSES           STATUS CODE
   informational response :- (100-199) 
   successful response    :- (200-299)
   redirectional message  :- (300-399)
   client error response  :- (400-499)
   server error response  :- (500-599)
*/


class apiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}


