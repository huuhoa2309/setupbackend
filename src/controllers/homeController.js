let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getTestapi = (req, res) => {
    return res.render('test/testapi.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getTestapi: getTestapi
}