module.exports = function(req, res, next) {
    res.header('Access-control-Allow-Origin','*')
    res.header('Access-control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.header('Access-control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    next()
}