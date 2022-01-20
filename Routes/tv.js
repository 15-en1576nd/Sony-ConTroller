const express = require("express");
const app = express();
const router = express.Router();
const Bravia = require("bravia");

/**
 * @swagger
 * /tv:
 *   get:
 *     description: Get all TV's
 *     tags: [TV]
 *     responses:
 *       200:
 *         description: Returns an array of TV ip's
 *       400:
 *         description: Error
 */
router.get("/tv", async (req, res) => {
  // Get all TV's with a 10 second timeout
  const tvs = await Bravia.discover(10000);
  console.log(tvs);
  return res.json(tvs);
});

/**
 * @swagger
 * /tv/{ip}:
 *  get:
 *    description: Get TV by ip
 *    tags: [TV]
 *    parameters:
 *      - name: ip
 *        in: path
 *        description: TV ip
 *        required: true
 */
router.get("/tv/:ip", async (req, res) => {
  const ip = req.params.ip;
  const tv = new Bravia(ip, "80", "0000");
  return res.json(await tv.getIRCCCodes());
});
module.exports = router;
