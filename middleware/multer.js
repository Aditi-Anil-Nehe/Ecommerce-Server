const express = require('express')
const multer = require("multer")
const path = require('path')
const fs = require('fs')

const app = express()
const port  = 7000

const storage = multer.diskStorage({
     destination:function(req , file ,cb){
        cb(null ,'uploads/')
     },
     filename: function(req , file ,cb){
        cb(null, Date.now() + path.extname(file.originalname))
     }
})
 
 const fileFilter = (req , file , cb)=>{
    const allowedType = /jpeg|jpg|png/
    const extname = allowedType.test(path.extname(file.originalname))
    if(extname) return cb(null , true)
        cb(new Error("only images (png , jpg , jpeg) allowed"))
 }

// app.get('/images/:filename', (req, res) => {
//   const filePath = path.join(__dirname, 'uploads', req.params.filename)
//   if (fs.existsSync(filePath)) {
//     res.sendFile(filePath)
//   } else {
//     res.status(404).send({ msg: "Image not found" })
//   }
// })


const upload =  multer({storage : fileFilter})

// app.post('/upload' , upload.single('myFile'), (req , res)=>{
//         res.send({msg:"file uploaded successfully" , file:req.file})
// })

// app.get('/', (req , res) => res.send("hello world"))

// app.listen(port , () => console.log(`example app listining on port ${port}!`))

const uploadSingle = (filename)=> upload.single(filename)


const uploadMultiple = (fieldname , maxCount = 3)=> upload.array(fieldname , maxCount)

module.exports = {
    uploadSingle , uploadMultiple
}