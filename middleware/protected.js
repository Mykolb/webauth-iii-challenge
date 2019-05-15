//mw function 
const protected = (req, res, next) => {
    // const { username, password } = req.headers;
    //if the client is logged in, req.session.user set 

    if (req.session && req.session.user) {
        next();
      } else {  
        res.status(401).json({message: "You didn't think I was going to let you in, did you..?"})
      }
    }







module.exports = protected;
