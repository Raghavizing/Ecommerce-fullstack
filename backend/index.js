import express, { json } from "express";
import mongoose, { mongo } from "mongoose";
import jwt from "jsonwebtoken"
import multer from "multer";
import cors from "cors"
import path from "path";
const port = 4000;
const password = 'gIUmz2eWKMRpqx0M';
const app = express();
app.use(express.json());
app.use(cors());
//Database Connection
mongoose.connect(`mongodb+srv://raghavchaturvedi77:${password}@ecommerce.okjwedi.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce/ecommerce`)
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(`Server Running at Port ${port}`);
    }
});
//API Creation
app.get("/", (req, res) => {
    res.send("Express App Is Running");
})
//Image Storage Engine
const storage = multer.diskStorage({
    destination: './Uploads/Images',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.use("/Images", express.static("./Uploads/Images"))

app.post("/upload", upload.single('product'), (req, res) => {
    res.send({
        success: 1,
        imgUrl: `http://localhost:${port}/Images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }

})
app.post("/addProduct", async (req, res) => {
    let productArray = await Product.find({});
    let product_id = 1;
    if (productArray.length > 0) {
        let last_product = productArray.splice(-1);
        product_id = last_product.id + 1;
    }
    const product = new Product({
        id: product_id,
        name: req.body.name,
        image: req.body.image,
        old_price: req.body.old_price,
        new_price: req.body.new_price,
        category: req.body.category
    })
    await product.save();
    console.log(product);
    res.send({
        success: 1,
        name: req.body.name,
    })
})
app.post("/removeProduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Sucess");
    res.send({
        sucess: 1,
        id: req.body.id,
    })
})
app.get("/allProducts", async (req, res) => {
    const allProducts = await Product.find({});
    console.log("All products fetched.")
    res.send(allProducts);
})
app.get("/popularProducts", async (req, res) => {
    const products = await Product.find({category:"Women"});
    const popularProducts = products.slice(0,4);
    console.log("Popular products fetched.")
    res.send(popularProducts);
})
app.get("/newCollection", async (req, res) => {
    const products = await Product.find({});
    const newCollection = products.slice(-8);
    console.log("New Collection fetched.")
    res.send(newCollection);
})

//Frontend APIs
const Users = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
app.post("/signup", async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ sucess: 0, error: "Email Id already exists." })
    }
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom')
    res.send({
        success: 1,
        name: req.body.name,
        token
    })
})
app.post('/login',async(req,res)=>{
    const user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = (req.body.password===user.password);
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom')
            res.send({
                success: 1,
                token
            })
        }
        else{
            res.send({
                success: 0,
                error:"Wrong Password"
            })
        }
    }
    else{
        res.send({
            success: 0,
            error:"User doesn't exist"
        })
    }
})