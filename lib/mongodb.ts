import mongoose, { connect, connection } from 'mongoose'

// const { MONGODB = 'mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false' } = process.env;
// const DATABASE = "mongodb+srv://ghafari5000:Eindev5000@cluster1.lxbrxtw.mongodb.net/?retryWrites=true&w=majority"
const DATABASE = "mongodb://mongo:27017/denizpazs"
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

// برقراری ارتباط با پایگاه داده MongoDB
export const connectToDatabase = async () => {
  if (!connection.readyState) {
    // console.log('Connecting to ', DATABASE)
    await mongoose.connect(DATABASE, options)
    .then((c) => {
      console.log("Mongo Connected: ")
    })
    .catch((error) => {
      console.log("error: ", error)
    })
  }
}
