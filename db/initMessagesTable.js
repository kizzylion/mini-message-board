const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  //   Add your database URL in .env
  connectionString: process.env.DATABASE_URL, // Add your database URL in .env
  //   ssl: {
  //     rejectUnauthorized: false, // Necessary for hosted PostgreSQL services like Render
  //   },

  // LOCAL
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   database: process.env.DB_NAME,
  //   password: process.env.DB_PASSWORD,
  //   port: process.env.DB_PORT,
});

const messages = [
  {
    id: 1,
    receiver: "First Bank",
    subject: "Today’s Knowledge Exchange Session Begins Shortly!",
    message:
      "With 2025 just around the corner, we’re excited to share this week’s updates: Public Agent Inbox, Google Workspace Automations (Docs, Sheets, Calendar, Drive), and enhanced Agent Tool controls. Enjoy and have fun!",
  },
  {
    id: 2,
    receiver: "Olympics",
    subject: "Sport Week sales are here 🔥",
    message:
      "We’re excited to announce that our Sport Week sales are now live! Get your favorite gear at unbeatable prices. Don’t miss out on the action. Shop now and enjoy free shipping on orders over $50.",
  },
  {
    id: 3,
    receiver: "Forward Global",
    subject: "Order Details",
    message:
      "Your order has been confirmed. Here are the details: Order Number: 1234567890, Date: 2024-11-29, Total: $100.00. Thank you for your purchase!",
  },
  {
    id: 4,
    receiver: "donotreply@gmail.com",
    subject: "Appointment Reminder",
    message:
      "This is a reminder that your appointment is scheduled for tomorrow at 10:00 AM. Please confirm or reschedule if necessary.",
  },
];
//auto generate date_created
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    receiver VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const insertMessagesQuery = `
  INSERT INTO messages (receiver, subject, message)
  VALUES ($1, $2, $3)
  ON CONFLICT (id) DO NOTHING;
`;

(async () => {
  try {
    await client.connect();

    // Create the messages table
    console.log("Creating table...");
    await client.query(createTableQuery);

    // Insert data into the table
    console.log("Inserting data...");
    for (const msg of messages) {
      await client.query(insertMessagesQuery, [
        msg.receiver,
        msg.subject,
        msg.message,
      ]);
    }

    console.log("Data inserted successfully.");
  } catch (err) {
    console.error("Error setting up the database:", err);
  } finally {
    client.end();
  }
})();
