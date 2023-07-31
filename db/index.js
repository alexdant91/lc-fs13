const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_CONNECTION_URI);
        
        console.log("MongoDB Atlas connected");
    } catch (error) {
        throw error;
    }
}

const models = {
    User: require("./models/User"),
};

module.exports = {
    connect,
    ...models,
}