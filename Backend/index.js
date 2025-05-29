const cookieparser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userroute");
const companyRoute = require("./routes/companyroute");
const jobRoute = require("./routes/jobroute");
const applicationRoute = require("./routes/applicationroute");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
const corsOptions = {
    origin:'https://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;

const dbConnect = require("./config/database");
dbConnect();

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

