import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://krossler:krossler123@react-fullstack.tvrikmx.mongodb.net/?retryWrites=true&w=majority&appName=react-fullstack";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'POST') {
        try {
            const { name, email, message } = req.body;
            const newContact = new Contact({ name, email, message });
            await newContact.save();

            res.status(201).json({ message: 'Mensaje enviado correctamente.' });
        } catch (error) {
            res.status(500).json({ message: 'Error al enviar el mensaje.' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}