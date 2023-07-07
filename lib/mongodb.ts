import mongoose, { connect, connection } from 'mongoose'

const DATABASE = "mongodb://mongo:27017/denizpaz"
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

// برقراری ارتباط با پایگاه داده MongoDB
export const connectToDatabase = async () => {
  if (!connection.readyState) {
    // console.log('Connecting to ', DATABASE)
    await mongoose.connect(DATABASE || "mongodb://mongo:27017/denizpaz", options)
    .then((c) => {
      console.log("Mongo Connected: ")
    })
    .catch((error) => {
      console.log("error: ", error)
    })
  }
}
