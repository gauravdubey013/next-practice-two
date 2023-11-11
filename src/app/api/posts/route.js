import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // fetch
  try {
    await connect();
    const posts = await postMessage.find();

    return new NextResponse(posts, { status: 200 });
  } catch (error) {}
  return new NextResponse("Error occur in DataBase!", { status: 500 });
};
