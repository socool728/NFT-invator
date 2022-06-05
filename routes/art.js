const express = require("express");
const Jimp = require("jimp");
const uuidv4 = require("uuid/v4");
const router = express.Router();

router.post("/", async (req, res) => {
  if (req.body.add.length !== 0) {
    const image = await Jimp.read(req.body.add[0].url);
    for (let i = 1; i < req.body.add.length; i++) {
      let img = await Jimp.read(req.body.add[i].url);
      image.composite(img, 0, 0);
    }
    const url = "/public/satic/" + uuidv4() + ".png";
    image.write("." + url);
    res.json({
      info: req.body.add,
      url: "http://10.10.11.67:4000" + url,
      workplace: req.body.workplace,
      name: req.body.name,
    });
  } else {
    res.json({
      info: req.body.add,
      url: "",
      workplace: req.body.workplace,
      name: req.body.name,
    });
  }

  // const background = await Jimp.read("./public/Data/Background/back1.png");
  // const eye = await Jimp.read("./public/Data/Eyes/1.png");
  // const armor = await Jimp.read("./public/Data/Armor/1.png");
  // background.composite(eye, 0, 0);
  // background.composite(armor, 0, 0);
  // background.write("./public/new.png");
  // res.send(`http://localhost:${port}/static/new.png`);
});

module.exports = router;
