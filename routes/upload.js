const express = require("express");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const router = express.Router();

const DIR = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(
      null,
      uuidv4() + ")_(" + fileName
      // "." + fileName.split(".")[fileName.split(".").length - 1]
    );
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // if (file.mimetype == "image/png") {
    cb(null, true);
    //   } else {
    //     cb(null, false);
    //     return cb(new Error("Only .png format allowed!"));
    //   }
    // },
  },
});

router.post("/", upload.array("imgCollection"), async (req, res, next) => {
  try {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (let i = 0; i < req.files.length; i++) {
      reqFiles.push({
        collection:
          req.body.folderPath[i].split("/")[
            req.body.folderPath[i].split("/").length - 2
          ],
        name: req.files[i].originalname.split(".")[
          req.files[i].originalname.split(".").length - 2
        ],
        url: url + "/public/" + req.files[i].filename,
      });
    }
    res.status(201).json({
      imgCollection: reqFiles,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// router.get("/", (req, res, next) => {
//   User.find().then((data) => {
//     res.status(200).json({
//       message: "User list retrieved successfully!",
//       users: data,
//     });
//   });
// });
module.exports = router;
