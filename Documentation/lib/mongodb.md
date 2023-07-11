# Mongodb

کد فوق مربوط به برقراری ارتباط با پایگاه داده MongoDB است. در ادامه، توضیحی مفصل برای هر بخش از کد ارائه خواهم داد:

```javascript
import mongoose, { connect, connection } from 'mongoose'

const DATABASE = "mongodb://mongo:27017/denizpaz"
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

// برقراری ارتباط با پایگاه داده MongoDB
export const connectToDatabase = async () => {
  if (!connection.readyState) {
    // اتصال به پایگاه داده با استفاده از mongoose.connect
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_LOCAL_URL, options)
      .then((c) => {
        console.log("Mongo Connected: ")
      })
      .catch((error) => {
        console.log("error: ", error)
      })
  }
}
```

در این کد:

- آدرس پایگاه داده MongoDB در متغیر `DATABASE` تعریف شده است.
- تنظیمات برای اتصال به پایگاه داده در متغیر `options` قرار دارد.
- تابع `connectToDatabase` برای برقراری ارتباط با پایگاه داده MongoDB استفاده می‌شود. در این تابع، ابتدا بررسی می‌شود که ارتباط با پایگاه داده قبلاً برقرار نشده باشد (`connection.readyState` برابر 0 است). سپس با استفاده از `mongoose.connect` و آدرس پایگاه داده و تنظیمات مشخص شده، اتصال به پایگاه داده برقرار می‌شود. در صورت موفقیت آمیز بودن اتصال، پیام "Mongo Connected" در کنسول نمایش داده می‌شود. در صورت بروز خطا، خطای مربوطه نمایش داده می‌شود.
