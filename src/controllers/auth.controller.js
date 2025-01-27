let store = {};

const authController = (req, res) => {
    let obj = req.body;
    store[obj.userid] = obj.password;
    res.send(`${JSON.stringify(store)} aagya hai`)
}

module.exports = authController;