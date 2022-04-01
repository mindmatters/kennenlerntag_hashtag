import http from 'http';
import express, { Express } from 'express';

import routes from './routes/Hashtags';

const router: Express = express();

router.use(express.json);

// router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET');
//         return res.status(200).json({});
//     }
//     next();
// });

router.use('/', routes);

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
    });
})

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log('Server running on ', PORT));
