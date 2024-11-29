const messages = [
  {
    id: 1,
    receiver: "First Bank",
    Subject: "Today’s Knowledge Exchange Session Begins Shortly!",
    messages:
      "With 2025 just around the corner, we’re excited to share this week’s updates: Public Agent Inbox, Google Workspace Automations (Docs, Sheets, Calendar, Drive), and enhanced Agent Tool controls. Enjoy and have fun!",
    dateCreated: "2024-11-28 10:00:00",
  },
  {
    id: 2,
    receiver: "Olympics",
    Subject: "Sport Week sales are here 🔥",
    messages:
      "We’re excited to announce that our Sport Week sales are now live! Get your favorite gear at unbeatable prices. Don’t miss out on the action. Shop now and enjoy free shipping on orders over $50.",
    dateCreated: "2024-11-29 10:20:00",
  },
  {
    id: 3,
    receiver: "Forward Global",
    Subject: "Order  Details",
    messages:
      "Your order has been confirmed. Here are the details: Order Number: 1234567890, Date: 2024-11-29, Total: $100.00. Thank you for your purchase!",
    dateCreated: "2024-11-29 11:00:00",
  },
  {
    id: 4,
    receiver: "donotreply@gmail.com",
    Subject: "Appointment Reminder",
    messages:
      "This is a reminder that your appointment is scheduled for tomorrow at 10:00 AM. Please confirm or reschedule if necessary.",
    dateCreated: "2024-11-29 11:30:00",
  },
];

const getMessages = () => {
  return messages;
};

const getMessageById = (id) => {
  return messages.find((message) => message.id === id);
};

const createMessage = (message) => {
  messages.push(message);
};

const messageObject = {
  getMessages,
  getMessageById,
  createMessage,
};

module.exports = messageObject;
