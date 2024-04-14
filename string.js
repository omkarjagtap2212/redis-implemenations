// const clinet =require("./clinet")

const client = require("./client");



// async function init(){
//     const result = await clinet.get("user:3")
//     console.log("results",result)


// }

// init()


const init = async () => {
    // const result =await client.get("user:3")
    // console.log("result-->",result)

    // await client.set("omkarLoveA","omkar love asmita so much and asmita love omkar so much  and he is getting married soon")
    // // await client.expire("user:3",10)
    //  const result =await client.get("user:3")
    // // console.log("result-->",result)
    // await client.lpush("msg", 1)
    // await client.lpush("msg", 2)
    // await client.lpush("msg", 3)
    // await client.lpush("msg", 4)
    // const result = await client.blpop("msg",40)
    // const result = await client.xadd("msg","t"  )
    const result = await client.xadd("msg", "*", "field1", "value1", "field2", "value2");


    // console.log(result)
}



init()