import request from "supertest";
import app from "../src/app.js";
import User from "../src/models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const hashed = await bcrypt.hash("password", 10);
  await User.create({ name: "Test", email: "test@test.com", password: hashed, role: "ADMIN" });
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe("POST /api/auth/login", () => {
  it("should login successfully", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@test.com", password: "password" });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
