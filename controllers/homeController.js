exports.getHome = (req, res, next) => {
    res.render('index', {
        title: 'Main page'
    })
}
