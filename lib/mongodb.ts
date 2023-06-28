import mongoose, { connect, connection } from 'mongoose'

// const { MONGODB = 'mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false' } = process.env;
const DATABASE = process.env.DB_LOCAL_URL || 'mongodb://mongo:27017/denizpaz'
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

// برقراری ارتباط با پایگاه داده MongoDB
export const connectToDatabase = async () => {
  if (!connection.readyState) {
    console.log('Connecting to ', DATABASE)
    await mongoose.connect(DATABASE, options)
    .then((c) => {
      console.log("Mongo: ", c)
    })
    .catch((error) => {
      console.log("error: ", error)
    })
  }
}
