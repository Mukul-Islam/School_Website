import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();
const PORT = 5000;

const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
  try {
    // ==========================================
    // CONNECT MONGODB
    // ==========================================

    await client.connect();

    console.log("MongoDB connected successfully");

    // ==========================================
    // MIDDLEWARE
    // ==========================================

    app.use(cors());
    app.use(express.json());

    // ==========================================
    // DATABASE
    // ==========================================

    const db = client.db("abc_school");

    const studentsCollection = db.collection("students");

    // ==========================================
    // HOME API
    // ==========================================

    app.get("/", (req, res) => {
      res.json({
        success: true,
        message: "ABC School API Server is running",
      });
    });

    // ==========================================
    // HEALTH API
    // ==========================================

    app.get("/api/health", (req, res) => {
      res.json({
        success: true,
        message: "ABC School backend is healthy",
      });
    });

    // ==========================================
    // GET ALL STUDENTS
    // ==========================================

    app.get("/api/students", async (req, res) => {
      try {
        const students = await studentsCollection
          .find({})
          .toArray();

        res.json({
          success: true,
          count: students.length,
          data: students,
        });
      } catch (error) {
        console.error("Failed to fetch students:", error);

        res.status(500).json({
          success: false,
          message: "Failed to fetch students",
        });
      }
    });

    // ==========================================
    // GET STUDENT BY STUDENT ID
    // ==========================================

    app.get("/api/students/:studentId", async (req, res) => {
      try {
        const { studentId } = req.params;

        const student = await studentsCollection.findOne({
          studentId: studentId,
        });

        if (!student) {
          return res.status(404).json({
            success: false,
            message: "Student not found",
          });
        }

        res.json({
          success: true,
          data: student,
        });
      } catch (error) {
        console.error("Failed to fetch student:", error);

        res.status(500).json({
          success: false,
          message: "Failed to fetch student",
        });
      }
    });

    // ==========================================
    // STUDENT LOGIN (AUTHENTICATION)
    // ==========================================

    app.post("/api/auth/login", async (req, res) => {
      try {
        const { studentId, password } = req.body;

        // Basic validation
        if (!studentId || !password) {
          return res.status(400).json({
            success: false,
            message: "Student ID and password are required",
          });
        }

        // Find student
        const student = await studentsCollection.findOne({
          studentId: studentId,
        });

        if (!student) {
          return res.status(401).json({
            success: false,
            message: "Invalid Student ID or Password",
          });
        }

        // Check if password has been set for this student
        if (!student.passwordHash) {
          return res.status(401).json({
            success: false,
            message: "Invalid Student ID or Password",
          });
        }

        // Compare password with hash
        const isPasswordCorrect = await bcrypt.compare(
          password,
          student.passwordHash
        );

        if (!isPasswordCorrect) {
          return res.status(401).json({
            success: false,
            message: "Invalid Student ID or Password",
          });
        }

        // Login success — don't send passwordHash back
        const { passwordHash, ...studentData } = student;

        res.json({
          success: true,
          message: "Login successful",
          data: studentData,
        });
      } catch (error) {
        console.error("Login failed:", error);

        res.status(500).json({
          success: false,
          message: "Login failed. Please try again.",
        });
      }
    });

    // ==========================================
    // START SERVER
    // ==========================================

    app.listen(PORT, () => {
      console.log(
        `ABC School server running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error
    );
  }
}

startServer();