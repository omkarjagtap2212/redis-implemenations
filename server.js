const express = require("express")
const client = require("./client")
const axios = require("axios").default



const app = express()
const PORT = 9000


app.get("/", async (req, res) => {

    const cacheValue = await client.get("todos")

    if (cacheValue) {
        return res.json(JSON.parse(cacheValue))
    }

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

    await client.set("todos",JSON.stringify(data))
    await client.expire("todos",30)


    return res.json(data)


})



app.listen(PORT, () => console.log("Server has been started..!!", PORT))