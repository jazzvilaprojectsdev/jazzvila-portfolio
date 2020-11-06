import { NextApiRequest, NextApiResponse } from "next/types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
