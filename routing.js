
const fliSytem = require('fs'); 
const url = require('url');
// const url = require('url');
function routing(req, res){
    
    const path = url.parse(req.url).pathname
    console.log(path);
        // res.end(index.html);
        switch(path){
            case '/':
                handelrequest('index.html',res);
                break;
            case '/admin':
                handelrequest('admin.html',res);
            break;
            case '/regester':
                handelrequest('regest.html',res);
                break;
            default:
                handelrequest('erorr.html',res);
                break;
                  
        }
    }

    // the form data names
    // /login
    // username
    // email
    // password
    // Special
    // month
    // month

    if(usrname == 'Hamzah' && password == "700450#" && emaill =="Hamz7X@outlook.com" && Specialization=='IT')
{
    handelrequest('admin.html',res);

}
else{
    handelrequest('erorr.html',res);
}


function handelrequest(filePath, res){
    fliSytem.readFile(filePath,null,(error,data)=>{
        if(error){
            res.end('File Have Erorr')
        }else{
            res.end(data)
        }
    });
}

module.exports = routing; 