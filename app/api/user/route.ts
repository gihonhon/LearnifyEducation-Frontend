import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password, imageUrl, role } = await req.json();
    // const { name, email, password, imageUrl } = body;

    const existingEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return new NextResponse("Email already exist", { status: 400 });
    }

    const hashPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
        image: imageUrl,
        role: role,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.log("[DAFTAR_USER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
