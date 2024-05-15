const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')

router.post('/registration',)
router.post('/login',)
router.get('/auth',(req, res) => {
    res.json({message: 'Hello world !'})
})

module.exports = router