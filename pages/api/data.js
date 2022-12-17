import data from "../../data/data";

export default async (req, res) => {
  res.status(200).json(JSON.stringify(data));
};
