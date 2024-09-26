import express from "express"
import cors from 'cors'
import fs from 'fs'
import bodyParser from "body-parser";

const port =1234;
const app=express()

app.use(bodyParser.json())
app.use(cors())
//get response
app.get("/",(req,res)=>{
  response.json(
    {
      greeting:"Hello Iam get"
    }
  )
})
//post response
app.post("/sign-up",(req,res)=>{
  console.log('req body is:',req.body)
  if (!req.body) {
    console.log('body is empty')
    res.json({ error: 'Missing request body' });
}
  fs.readFile("./lib/data.json","utf-8",(readError,data)=>{
    if(readError)
      {
        res.json({
          success:false,
          error:'in reading file'
        })
      }
    const {name,email,password}=req.body
    let savedData=data ? JSON.parse(data) : []
    const newUser={
      id:Date.now().toString(),
      name:name,
      email:email,
      password:password
    }
    savedData.push(newUser)
    fs.writeFile("./lib/data.json",JSON.stringify(savedData),(error)=>{
  if(error)
  {
    res.json(
      {
        success:false,
        error:'in writing file'
      }
    )
  }
  else
  {
    res.json({
      success:true,
      user:newUser
    })
  }
    })
    })
})


app.post("/sign-in",(req,res)=>{
fs.readFile("./lib/data.json","utf-8",(readError,data)=>{
  if(readError)
  {
    res.json(
      {
        success:false
      }
    )
  }
  const {email,password}=req.body
  let savedData=data ? JSON.parse(data) :[]
  if(!savedData)
  {
    res.json(
      {
        success:false
      }
    )
  }
  const foundUser=savedData.find(data=>data.email===email && data.password===password)
  if(foundUser)
  {
    res.json({
      success:true
    })

  }
  else
  {
    res.json({
      success:false
    })
  }
})
})
app.listen(port,()=>{
  console.log(`Server is started working https://team-three.onrender.com`)
})
