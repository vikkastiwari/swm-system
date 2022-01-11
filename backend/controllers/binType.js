const BinType = require("../models/binType");

const getBinType = async (req, res) => {
  return res.send(await BinType.find());
};

const getSingleBinType = async (req, res) => {
  const { id } = req.params;
  return res.send(await BinType.findById(id));
};

const createBinType = async (req, res) => {
  const { name } = req.body;
  const binType = new BinType({ name: name });
  await binType.save();
  return res.send("Bin Type created successfully!");
};

const updateBinType = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const binType = await BinType.findByIdAndUpdate(
    id,
    { name: name },
    { new: true }
  );
  return res.send("Bin Type updated successfully!");
};

const deleteBinType = async (req, res) => {
  const { id } = req.params;
  const binType = await BinType.findByIdAndDelete(id);
  return res.send("Bin Type deleted successfully!");
};

module.exports = {
  getBinType,
  getSingleBinType,
  createBinType,
  updateBinType,
  deleteBinType,
};
