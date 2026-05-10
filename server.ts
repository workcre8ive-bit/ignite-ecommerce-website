import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  console.log('--- Ignite Server Booting ---');
  try {
    const app = express();
    const PORT = 3000;

    // API routes FIRST
    app.get('/api/health', (req, res) => {
      res.json({ 
        status: 'active', 
        message: 'Ignite Systems Online', 
        env: process.env.NODE_ENV,
        uptime: process.uptime()
      });
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('Initializing Vite Development Middleware...');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
      console.log('Vite Middleware Connected.');
    } else {
      console.log('Initializing Production Static Handler...');
      const distPath = path.join(process.cwd(), 'dist');
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`>>> IGNITE CORE LISTENING ON PORT ${PORT}`);
    });
  } catch (error) {
    console.error('FATAL_BOOT_ERROR:', error);
    process.exit(1);
  }
}

startServer();
