import express from "express";
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserChats from "./models/userChats.js";
import Chat from "./models/chat.js";
import { requireAuth, clerkMiddleware } from "@clerk/express";

dotenv.config();
const app = express();
app.use(clerkMiddleware());
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.get("/api/test", requireAuth(), (req, res) => {
  console.log("clerk-user-id", req.auth.userId);
  res.json({ userId: req.auth.userId });
});

app.post("/api/chats", requireAuth(), async (req, res) => {
  const { userId, text } = req.body;

  try {
    //CREATING A NEW CHAT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    //CHECK IF THE USERCHATS EXISTS
    const userChats = await UserChats.find({ userId: userId });

    //IF DOESN'T EXIST, CREATE A NEW ONE AND THE CHATS IN THE CHATS ARRAY
    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: savedChat.id,
            title: text.substring(0, 40),
          },
        ],
      });

      await newUserChats.save();
    } else {
      //IF EXISTS, PUSH THE CHAT TO THE EXISTING ARRAY
      await UserChats.updateOne(
        { userId },
        {
          $push: {
            chats: {
              _id: savedChat.id,
              title: text.substring(0, 40),
            },
          },
        }
      );

      res.status(201).send(newChat._id);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack); // log the error
  res.status(401).send("Unauthorized!");
});

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server is running on port ${process.env.PORT}`);
});
