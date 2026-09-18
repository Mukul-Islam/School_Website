import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import readline from "readline/promises";
import { stdin, stdout } from "process";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const rl = readline.createInterface({ input: stdin, output: stdout });

async function addOneStudent(studentsCollection) {
  console.log("\n--- নতুন Student-এর তথ্য দাও ---");

  const studentId = await rl.question("Student ID (e.g. STU021): ");
  const name = await rl.question("Name: ");
  const studentClass = await rl.question("Class (e.g. 6, 7, 10): ");
  const section = await rl.question("Section (e.g. A, B): ");
  const roll = await rl.question("Roll: ");
  const password = await rl.question("Password (login password): ");

  // Check if this studentId already exists
  const existing = await studentsCollection.findOne({ studentId });

  if (existing) {
    console.log(`❌ এই Student ID (${studentId}) আগে থেকেই আছে। এটা skip করা হলো।`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const studentDoc = {
    studentId: studentId.trim(),
    name: name.trim(),
    roll: Number(roll),
    class: studentClass.trim(),
    section: section.trim(),
    session: "2026",
    passwordHash: passwordHash,
  };

  await studentsCollection.insertOne(studentDoc);

  console.log(`✅ Student যোগ হয়েছে: ${studentId} - ${name}`);
  console.log(`   (Login Password: ${password} — এটা লিখে রাখো, database-এ শুধু hash আছে)`);
}

async function run() {
  try {
    await client.connect();
    console.log("MongoDB connected");

    const db = client.db("abc_school");
    const studentsCollection = db.collection("students");

    let addMore = true;

    while (addMore) {
      await addOneStudent(studentsCollection);

      const answer = await rl.question(
        "\nআরেকজন student যোগ করতে চাও? (y/n): "
      );

      addMore = answer.trim().toLowerCase() === "y";
    }

    console.log("\n=== শেষ। সব student database-এ save হয়েছে। ===");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    rl.close();
    await client.close();
  }
}

run();