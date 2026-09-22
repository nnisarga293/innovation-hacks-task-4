require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const aiRoutes = require('./routes/ai');

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.get('/api/health', (req,res)=>res.json({status:'ok',message:'Task 4 API is running'}));
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);
app.use((err,req,res,next)=>{ console.error(err); res.status(err.status||500).json({message:err.message||'Server error'}); });

const PORT = process.env.PORT || 5000;
async function start(){
  try { await mongoose.connect(process.env.MONGODB_URI); console.log('MongoDB connected'); app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`)); }
  catch(e){ console.error('MongoDB connection failed:',e.message); process.exit(1); }
}
start();
