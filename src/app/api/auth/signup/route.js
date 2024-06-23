import { connectDB } from "@/db/dbConnect";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (request) => {
  const reqBody = await request.json();
  const { name, email, password } = reqBody;

  try {
    await connectDB();

    const user = await UserModel.findOne({ email });

    if (user) {
      return NextResponse.json("User already exists!", { status: 400 });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new UserModel({
      username: name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully!", user: savedUser },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json("Something went wrong!", { status: 500 });
  }
};
