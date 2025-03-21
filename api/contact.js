import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://krossler:krossler123@react-fullstack.tvrikmx.mongodb.net/?retryWrites=true&w=majority&appName=react-fullstack";

// Conectar ao banco de dados
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw new Error("Erro ao conectar ao MongoDB");
    }
};

// Definir o esquema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Manipulador de requisições
export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'POST') {
        // Lidar com requisição POST
        try {
            const { name, email, message } = req.body;

            // Validação básica
            if (!name || !email || !message) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
            }

            const newContact = new Contact({ name, email, message });
            await newContact.save();

            res.status(201).json({ message: 'Mensagem enviada corretamente.' });
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            res.status(500).json({ message: 'Erro ao enviar a mensagem.' });
        }
    } else if (req.method === 'GET') {
        // Lidar com requisição GET
        try {
            const contacts = await Contact.find({}); // Busca todos os contatos
            res.status(200).json(contacts); // Retorna os contatos encontrados
        } catch (error) {
            console.error('Erro ao recuperar mensagens:', error);
            res.status(500).json({ message: 'Erro ao recuperar mensagens.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}
