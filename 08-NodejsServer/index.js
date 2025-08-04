'use strict'

/*...................*/

//  NODEJS

/*...................*/

// HTTPSERVER

const http = require('node:http') // BuiltIn Module

/*...................*/

// http.createServer((request, response)=> { } )

/*...................

const app = http.createServer((request, response)=> {
        response.end('Hello World')
        console.log('Console print')

 } )
*/

 // Default server domain (local domain) = localhost
 // Default server IP (local IP) = 127.0.0.1
 // app.listen(8000, ()=> console.log('Server started: http://127.0.0.1:8000'))

 //  request yerine req response yerine res kullan
/*
 const app = http.createServer((req, res)=> {
    //res.end('Hello World')
    //console.log('Console print')

    //console.log(req)
    //console.log(res)
    //console.log(req.url)

    if (req.url == '/'){
        res.end('Main Page')
    }else if (req.url == '/andre side'){
        res.end('andre side')
    }else {
        res.end('any page')
    }

} )

 
 app.listen(8000, ()=> console.log('Server started: http://127.0.0.1:8000'))

...................*/

const app = http.createServer((req, res)=> {

    if (req.url == '/api'){

        if (req.method== 'GET'){
            const obj = {
                result:true,
                message: 'Hello World'
            }
     
            res.write(JSON.stringify(obj))
            res.end()
    
        }
     

    }else {
        res.end('HTML')
    }
    

} ).listen(8000, ()=> console.log('Server started: http://127.0.0.1:8000'))


/*...................*/

