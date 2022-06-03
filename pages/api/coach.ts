// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const host = process.env.HOST_SERVER;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getSession({ req });

  console.log("The sespom", session)

  if (!session) {
    return res.status(401).json({ msg: "UNAUTHORIZED" });
  }

  try {
    const response = await axios.get(`${host}/api/user`, {
      params: { email: session?.user?.email },
    });

    const foundUser = response?.data;

    if (foundUser) {
      console.log("foundUser", foundUser);
      // create a new user
      const response = await axios.post(`${host}/api/coach`, {
        ...req.body,
        userId: foundUser?.data?._id,
      });
      return res.status(200).json(response.data);
    }
  } catch (error: any) {
    console.error("error occured", error?.response?.data);
    return res
      .status(error?.response?.status || 500)
      .json(error?.response?.data);
  }
}
