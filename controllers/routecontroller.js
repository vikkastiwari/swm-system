const route = require("../models/pathRoute");

const getRouteType = async (req, res) => {
  return res.send(await route.find());
};

const getSingleRouteById = async (req, res) => {
  const { id } = req.params;
  return res.send(await route.findById(id));
};

const creatNewRoute = async (req, res) => {
  const { requirePath, demandPath } = req.body;
  const dataBaseRouteSave = new route({ requirePath, demandPath });
  await dataBaseRouteSave.save();
  return res.send("Route are  created successfully!");
};

// const updateBinType = async (req, res) => {
//   const { name } = req.body;
//   const { id } = req.params;
//   const binType = await route.findByIdAndUpdate(
//     id,
//     { name: name },
//     { new: true }
//   );
//   return res.send("Bin Type updated successfully!");
// };

const deleteRoute = async (req, res) => {
  const { id } = req.params;
  const dataBaseRouteSave = await route.findByIdAndDelete(id);
  return res.send(`this route is deleted successfully${dataBaseRouteSave}`);
};

module.exports = {
  getRouteType,
  getSingleRouteById,
  creatNewRoute,
  deleteRoute,
};
