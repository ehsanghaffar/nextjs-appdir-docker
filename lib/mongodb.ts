import mongoose, { connect, connection } from 'mongoose'

const DATABASE = "mongodb://mongo:27017/denizpaz"
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

export const connectToDatabase = async () => {
  if (!connection.readyState) {
  
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_LOCAL_URL, options)
    .then((c) => {
      console.log("Mongo Connected: ")
    })
    .catch((error) => {
      console.log("error: ", error)
    })
  }
}
