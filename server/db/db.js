import mongoose from "mongoose";

export const db = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "FreeLance",
    })
    .then(() => console.log("Connected to database"))
    .catch((e) => console.log(e));
};
