import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

export const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema({
      username: {
        type: String,
        required: true,
      },
      password_hash: {
        type: String,
        required: true,
      },
    } as const)
  );

export const Session =
  mongoose.models.Session ||
  mongoose.model(
    "Session",
    new mongoose.Schema({
      user_id: {
        type: String,
        required: true,
      },
      expires_at: {
        type: Date,
        required: true,
      },
    } as const)
  );

export const adapter = new MongodbAdapter(
  mongoose.connection.collection("sessions"),
  mongoose.connection.collection("users")
);
