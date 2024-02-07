import mongoose from 'mongoose';

const connectMongoDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB connected successfully');

    } catch (err) {
        console.log(err);
    }
}

export default connectMongoDb;