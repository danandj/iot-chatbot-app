import "dotenv/config";
import { internalIpV4 } from "internal-ip";
import app from "./app.js";

const port = 3000;

app.listen(port, async () => {
    const localIP = await internalIpV4();
    console.log(`IP LOCAL : http://localhost:${port}`);
    console.log(`IP NETWORK : http://${localIP}:${port}`);
    console.log(`API Chatbot berada di rute http://${localIP}:${port}/api/chat`);
});