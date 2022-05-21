import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const secret = process.env.TOKEN_SECRET;

export async function middleware(req: any, res: NextApiResponse) {
  const auth = req.headers.get("Authorization");

  if (!auth) {
    return new Response(JSON.stringify({ message: "Not authenticated." }), {
      status: 401,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  const token = auth.split(" ")[1];
  if (!token) {
    return new Response(JSON.stringify({ message: "Access Denied." }), {
      status: 401,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
