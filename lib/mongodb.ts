import mongoose, { connect, connection } from 'mongoose'

const { MONGO_URI = 'mongodb://root:root@mongo:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false' } = process.env;

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    console.log('Connecting to ', MONGO_URI)
    await mongoose.connect(MONGO_URI, options)
  }
}
