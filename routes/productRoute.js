const express = require('express')
const productController = require('../controllers/productController')
const { uploadMultiple } = require('../middleware/multer')

const router = express.Router()

router.get('/getAllProducts', productController.getAllProducts)
router.get('/getProductById/:ID', productController.getProductById)
router.post('/createProduct', uploadMultiple("myFile"), productController.createProduct )
router.put("/updateProduct/:ID", uploadMultiple("myFile"),productController.updateProduct)
router.delete("/deleteProduct/:ID", productController.deleteProduct)

router.get("/filter", productController.getProductByFilter)

module.exports = router