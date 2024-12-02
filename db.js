const { getTime } = require("date-fns");
const dotenv = require("dotenv");

dotenv.config();

const pool = require("./db/pool");

const messages = [
  {
    id: 1,
    receiver: "First Bank",
    subject: "Today’s Knowledge Exchange Session Begins Shortly!",
    message:
      "With 2025 just around the corner, we’re excited to share this week’s updates: Public Agent Inbox, Google Workspace Automations (Docs, Sheets, Calendar, Drive), and enhanced Agent Tool controls. Enjoy and have fun!",

    dateCreated: new Date("2024-11-28 10:00:00"),
  },
  {
    id: 2,
    receiver: "Olympics",
    subject: "Sport Week sales are here 🔥",
    message:
      "We’re excited to announce that our Sport Week sales are now live! Get your favorite gear at unbeatable prices. Don’t miss out on the action. Shop now and enjoy free shipping on orders over $50.",
    dateCreated: new Date("2024-11-28 10:20:00"),
  },
  {
    id: 3,
    receiver: "Forward Global",
    subject: "Order  Details",
    message:
      "Your order has been confirmed. Here are the details: Order Number: 1234567890, Date: 2024-11-29, Total: $100.00. Thank you for your purchase!",
    dateCreated: new Date("2024-11-28 11:00:00"),
  },
  {
    id: 4,
    receiver: "donotreply@gmail.com",
    subject: "Appointment Reminder",
    message:
      "This is a reminder that your appointment is scheduled for tomorrow at 10:00 AM. Please confirm or reschedule if necessary.",
    dateCreated: new Date("2024-11-28 11:30:00"),
  },
];

const getMessages = async () => {
  // try {
  //   const sortedMessages = messages.sort(
  //     (a, b) => getTime(b.dateCreated) - getTime(a.dateCreated)
  //   );
  //   return sortedMessages;
  // } catch (error) {
  //   console.error(error);
  // }
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
};

const getMessageById = async (id) => {
  // try {
  //   const normalizedId = !isNaN(id) ? Number(id) : id;
  //   const message = messages.find((message) => message.id == normalizedId);
  //   if (!message) {
  //     throw new Error("Message not found");
  //   }
  //   return message;
  // } catch (error) {
  //   console.error(error);
  // }
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
};

const createMessage = async (message) => {
  // messages.push(message);
  const result = await pool.query(
    "INSERT INTO messages (id, receiver, subject, message, date_created) VALUES ($1, $2, $3, $4, $5)",
    [
      message.id,
      message.receiver,
      message.subject,
      message.message,
      message.dateCreated,
    ]
  );
  return result.rows[0];
};

const deleteMessage = async (id) => {
  // const index = messages.findIndex((m) => m.id == id);
  // messages.splice(index, 1);
  const result = await pool.query("DELETE FROM messages WHERE id = $1", [id]);
  return result.rows[0];
};

const messageObject = {
  getMessages,
  getMessageById,
  createMessage,
  deleteMessage,
};

module.exports = messageObject;
