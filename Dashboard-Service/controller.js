import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello From Dasboard service" });
});


//test
router.get("/health", (req, res) => {
  res.status(200).json({ msg: "Healthy Endpoint" });
});
export default router;
