import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import * as yup from "yup";

const userSchema = yup.object({
  fullname: yup.string().min(1, "Fullname is required").max(100),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

// Check Authenticated
export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);

  return NextResponse.json(session);
};

// Daftar
export async function POST(req: Request) {
  try {
    const body = await req.json();
    await userSchema.validate(body);
    const { email, fullname, password, gender } = body;

    // Check Email Exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      NextResponse.json(
        { user: null, message: "User with this email already taken" },
        { status: 409 }
      );
    }

    const hashPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
