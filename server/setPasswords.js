import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

// এখানে তুমি যে যে student-এর জন্য password সেট করতে চাও, সেগুলো লিখো
const studentPasswords = [
  { studentId: "STU001", password: "rahim123" },
  { studentId: "STU002", password: "karim123" },
  // প্রয়োজনমতো আরও student যোগ করো
];

async function run() {
  try {
    await client.connect();
    console.log("MongoDB connected");

    const db = client.db("abc_school");
    const studentsCollection = db.collection("students");

    for (const item of studentPasswords) {
      const hashedPassword = await bcrypt.hash(item.password, 10);

      const result = await studentsCollection.updateOne(
        { studentId: item.studentId },
        { $set: { passwordHash: hashedPassword } }
      );

      if (result.matchedCount === 0) {
        console.log(`❌ Student not found: ${item.studentId}`);
      } else {
        console.log(`✅ Password set for: ${item.studentId}`);
      }
    }

    console.log("Done. এখন এই স্ক্রিপ্ট আর চালানোর দরকার নেই।");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

run();