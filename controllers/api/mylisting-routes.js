// const router = require("express").Router();
// const { User, Post, Purchased, Review, MyListing } = require("../../models");
// const withAuth = require("../../utils/auth");

// // CREATE a POST
// router.post("/", withAuth, (req, res) => {
//   console.log("creating item: ");
//   // path to root directory + public/images folder
//   let path = process.cwd() + "/public/images/";

//   let file = ""; // declare file

//   if (req.files) {
//     // * Accessing the file by the <input> File name="item_img"
//     file = req.files.item_img;
//     path += file.name;
//   } else {
//     path += "not_available.png";
//   }

//   Post.create({
//     title: req.body.item_title,
//     price: req.body.item_price,
//     shipping: req.body.item_shipping,
//     description: req.body.item_description,
//     picture_url: path,
//     user_id: req.session.user_id,
//   })
//     .then((dbPostData) => {
//       if (file) {
//         // * move file to new directory in server with: mv(path, CB function(err))
//         file.mv(path, (err) => {
//           if (err) {
//             return res.status(500).json(err);
//           }
//           return res.send({ status: "success", path: path });
//         });
//       }
//       res.render("my-listings", { loggedIn: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
