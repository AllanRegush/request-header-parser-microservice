exports.index = (req, res) => {
    res.render('index');
}


exports.getHeader = (req, res) => {
    // console.log(req.headers);
    res.json({
        ipaddress: req.headers.host,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
};