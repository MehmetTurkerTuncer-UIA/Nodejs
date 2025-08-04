'use strict'

/*...................*/

//  NODEJS

/*...................*/

// HTTPSERVER

const http = require('node:http') // BuiltIn Module

/*...................*/

// http.createServer((request, response)=> { } )

const app = http.createServer((request, response)=> {
        response.end('Hello World')
        console.log('Console print')

 } )


 // Default server domain (local domain) = localhost
 // Default server IP (local IP) = 127.0.0.1
 app.listen(8000, ()=> console.log('Server started: http://127.0.0.1:8000'))


/*...................*/
/*...................*/