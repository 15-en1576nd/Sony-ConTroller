const express = require('express');
const app = express();
const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     description: Make a image gay
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 */
 router.get('/hello', (req, res) => {
    res.status(200).json({
        message: 'Hello'
        });
});

module.exports = router;