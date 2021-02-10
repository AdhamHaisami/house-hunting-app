const router = require('express').Router();

const { addHouseValidation } = require('../middleware/validation');
const { addNewHouse, getFavoriteList } = require('../controller/routes/house');

router.post('/houses', addHouseValidation, addNewHouse);
router.get('/favorite', getFavoriteList);

module.exports = router;
