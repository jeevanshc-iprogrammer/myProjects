const express = require('express');
const router = express.Router();
const storeValidation = require('../middlewares/storeValidation');
const storeInsert = require('../controllers/storeInsert');
const storeGet = require('../controllers/storeGet');
const storeDelete = require('../controllers/storeDelete');
const storeUpdate = require('../controllers/storeUpdate');

router.route('/insertData').post(storeValidation,storeInsert.insert);
router.route('/getData').get(storeGet.get);
router.route('/destroyData/:cityId').patch(storeDelete.destroy);
router.route('/updateData/:cityId').put(storeUpdate.update);

module.exports = router;