const { Router } = require('express')
const router = Router();

router.get('/test', (req, res) => {
    res.json({"Title": "Hello World"});
})

module.exports = router;