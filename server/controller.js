require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()

const Sequelize = require("sequelize")
const { response } = require('express')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  })
let globalUsernameId
let rec1
let rec2
let rec3
let usernameId
let difficultyLevel
let recordsArray=[]

let responseObject = {
    "difficultyLevel":"",
    "username":"",
    "record":"",
    "timer":0,
    "cardsNumber":0
}



module.exports ={
    seedDataBase: (req,res)=>{
        sequelize.query(`
        drop table if exists easyDifficultyRecords;
        drop table if exists mediumDifficultyRecords;
        drop table if exists hardDifficultyRecords;
        drop table if exists usernames;
        
        create table usernames (
            username_id serial primary key, 
            username varchar(30)
        );

        create table easyDifficultyRecords (
            easy_difficulty_record_id serial primary key,
            username_id INTEGER NOT NULL REFERENCES usernames(username_id),
            easy_difficulty_record integer
            
        );

        create table mediumDifficultyRecords (
            medium_difficulty_record_id serial primary key,
            username_id INTEGER NOT NULL REFERENCES usernames(username_id),
            medium_difficulty_record integer
            
        );

        create table hardDifficultyRecords (
            hard_difficulty_record_id serial primary key,
            username_id INTEGER NOT NULL REFERENCES usernames(username_id),
            hard_difficulty_record integer

        );

      
    `).then(() => {
        console.log('DB seeded!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
    },



    createUsername: (req,res)=>{
        console.log(req.body)
        const {input2} = req.body
        let response
        let username_id
        
        sequelize.query(`SELECT * FROM usernames 
        WHERE username='${input2}'
        `)
        .then(dbRes=>{
          let  responseObject66={
            "response":"",
            "records": [] ,
            "username": `${input2}`
          }

          console.log(dbRes[0].length)
          if (dbRes[0].length!==0){
            response=true
            responseObject66.response=response
          } else {
            responseObject.username=input2
            recordsArray=[]
            recordsArray.push(1000000,1000000,1000000)
            responseObject66.records.push(1000000,1000000,1000000)
            response=false
            responseObject66.response=response
            sequelize.query(`INSERT INTO usernames (username)
            VALUES('${input2}')
            `)
            sequelize.query(`SELECT username_id FROM usernames
            WHERE username='${input2}'
            `)
            .then(dbRes1=>{
                usernameId=(dbRes1[0][0].username_id)
                console.log(dbRes1)
                username_id=(dbRes1[0][0].username_id)              
                globalUsernameId=username_id
                sequelize.query(`INSERT INTO easyDifficultyRecords(easy_difficulty_record,username_id)
                VALUES(1000000,'${username_id}')
                `)
                sequelize.query(`INSERT INTO mediumDifficultyRecords(medium_difficulty_record,username_id)
                VALUES(1000000,'${username_id}')
                `)
                sequelize.query(`INSERT INTO hardDifficultyRecords(hard_difficulty_record,username_id)
                VALUES(1000000,'${username_id}')
                `)
            })
          }
          res.status(200).send(responseObject66)
          curentUser=input2
        })
        .catch(err=>console.log(err))
    },

    existingUsername: (req,res)=>{
        console.log(req.body)
        const {input1} = req.body
        let response
        let responseObject55={
            "response":"",
            "records": [] ,
            "username": ""
        }
        sequelize.query(`SELECT*FROM usernames
        WHERE username='${input1}'`)
        .then(dbRes2 =>{
            

          if(dbRes2[0].length!==0){
            recordsArray=[]
            console.log(dbRes2[0][0].username_id)
            usernameId=(dbRes2[0][0].username_id)
            globalUsernameId=usernameId
            response=true
            responseObject55.response=response
            responseObject.username=input1
            
            sequelize.query(`SELECT easy_difficulty_record
            FROM easyDifficultyRecords
            WHERE username_id=${usernameId}
            `)
            .then(dbRes11=>{
                console.log(dbRes11[0][0])
                rec1=dbRes11[0][0].easy_difficulty_record
                recordsArray.push(rec1)
                responseObject55.records.push(rec1)
            })
            sequelize.query(`SELECT medium_difficulty_record
            FROM mediumDifficultyRecords
            WHERE username_id=${usernameId}
            `)
            .then(dbRes12=>{
                console.log(dbRes12[0][0])
                rec2=dbRes12[0][0].medium_difficulty_record
                recordsArray.push(rec2)
                responseObject55.records.push(rec2)
                
            })
            sequelize.query(`SELECT hard_difficulty_record
            FROM hardDifficultyRecords
            WHERE username_id=${usernameId}
            `)
            .then(dbRes13=>{
                console.log(dbRes13[0][0])
                rec3=dbRes13[0][0].hard_difficulty_record
                recordsArray.push(rec3)
                responseObject55.records.push(rec3)
                res.status(200).send(responseObject55)   
            })
                 
          }else{
              response=false
              responseObject55.response=response
              res.status(200).send(responseObject55)
          }

        })
        .catch(err=>console.log(err))     
    },



   getRecords: (req,res)=>{
       sequelize.query(`SELECT usernames.username, usernames.username_id, easyDifficultyRecords.easy_difficulty_record,
        mediumDifficultyRecords.medium_difficulty_record, hardDifficultyRecords.hard_difficulty_record
        FROM usernames
        JOIN easyDifficultyRecords on usernames.username_id=easyDifficultyRecords.username_id
        JOIN mediumDifficultyRecords on usernames.username_id=mediumDifficultyRecords.username_id
        JOIN hardDifficultyRecords on usernames.username_id=hardDifficultyRecords.username_id
       `)
       .then(dbRes5 =>{
        res.status(200).send(dbRes5[0])
        })
        .catch(err=>console.log(err))
   },

   
   resetRecords: (req,res)=>{

       let username=req.params.myParam
       sequelize.query(`UPDATE easyDifficultyRecords
       SET easy_difficulty_record=1000000
       WHERE username_id='${globalUsernameId}';
       UPDATE mediumDifficultyRecords
       SET medium_difficulty_record=1000000
       WHERE username_id='${globalUsernameId}';
       UPDATE hardDifficultyRecords
       SET hard_difficulty_record=1000000
       WHERE username_id='${globalUsernameId}'
       `)
       .then(dbRes6=>{
        res.sendStatus(200)
       })
       .catch(err=>console.log(err))
   },



    recieveDifficultyLevel: (req,res)=>{
        difficultyLevel=req.body.difficulty
        responseObject.difficultyLevel=difficultyLevel
        if(difficultyLevel=="EASY"){
            responseObject.timer=10000
            responseObject.cardsNumber=16
            responseObject.record=recordsArray[0]

        } else if (difficultyLevel=="MEDIUM"){
            responseObject.timer=10000
            responseObject.cardsNumber=20
            responseObject.record=recordsArray[1]

        } else if (difficultyLevel=="HARD"){
            responseObject.timer=10000
            responseObject.cardsNumber=24
            responseObject.record=recordsArray[2]

        }

        res.sendStatus(200) 
    },




    sendDifficultyLevel: (req,res)=>{
        console.log(responseObject)
        res.status(200).send(responseObject)
    },


    
    recieveNewRecord: (req,res)=>{
        let newRecord=req.body.record
        console.log(`new record is ${newRecord}`)
        console.log(difficultyLevel)
        if (difficultyLevel=="EASY"){
            recordsArray.splice(0,1,newRecord)
            sequelize.query(`UPDATE easyDifficultyRecords
            SET easy_difficulty_record=${newRecord}
            WHERE username_id=${usernameId}
            `)
        } else if (difficultyLevel=="MEDIUM"){
            recordsArray.splice(1,1,newRecord)
            sequelize.query(`UPDATE mediumDifficultyRecords
            SET medium_difficulty_record=${newRecord}
            WHERE username_id=${usernameId}
            `)
        } else if (difficultyLevel=="HARD"){
            recordsArray.splice(2,1,newRecord)
            sequelize.query(`UPDATE hardDifficultyRecords
            SET hard_difficulty_record=${newRecord}
            WHERE username_id=${usernameId}
            `)
        }
    }
}
