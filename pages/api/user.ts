// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const host = process.env.HOST_SERVER;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const session = await getSession({ req });
    console.log("api session", session, req.url);

    if (!session) {
      return res.status(401).json({ msg: "UNAUTHORIZED" });
    }

    //  if method is post and url === "api/user"
    if (req.method === "POST" && req.url === "/api/user") {
      // check if user exists
      const response = await axios.get(`${host}/api/user`, {
        params: { email: session?.user?.email },
      });

      const foundUser = response?.data;

      if (!foundUser) {
        // create a new user
        const response = await axios.post(`${host}/api/user`, {
          email: session.user?.email,
          name: session.user?.name,
          image: session.user?.image,
        });
        return res.status(200).json(response.data);
      } else {
        return res.status(200).json({ msg: "User already exists" });
      }
    }
  } catch (error: any) {
    console.error("error occured", error);
    return res.status(error?.status || 500).end(error?.message);
  }
}
