const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

//Seed data for user that is used for testing
const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "John",
    email: "john@example.com",
    password: 'johnismyname!234',
    tokens: [{
        token: jwt.sign({_id: userOneId},process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: "James",
    email: "james@example.com",
    password: 'jamesismyname!234',
    tokens: [{
        token: jwt.sign({_id: userTwoId},process.env.JWT_SECRET)
    }]
}

//Seed data for user tasks
const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First Task',
    completed: false,
    owner: userOneId
}
const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second Task',
    completed: true,
    owner: userOneId
}
const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third Task',
    completed: true,
    owner: userTwoId
}

const setupDatabase = async ()=>{
        await User.deleteMany()
        await Task.deleteMany()
        await new User(userOne).save()
        await new User(userTwo).save()
        await new Task(taskOne).save()
        await new Task(taskTwo).save()
        await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}