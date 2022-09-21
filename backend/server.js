const cors = require("cors");
const express = require("express");
const app = express();
// const connection = require("./db");
const tasks = require("./routes/tasks");

// connection();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasks);
// app.use("./routes/tasks")

const port = process.env.PORT || 8080;

// app.get("/", async (req, res) => {
//     try {
//         res.send("testing")
//     }catch (error){
//         res.send(error)
//     }
// })

app.listen(port, (error) => {
    if(!error){
        console.log(`Listening on port ${port}...`)
    }else{
        console.log(`Error occurred, server start failed with error: ` + error)
    }
});


