module.exports = app => {
    require('./authRoutes')(app)
    require('./itemRoutes')(app) 
}