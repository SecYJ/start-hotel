import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const verifyPassword = async (
    password: string,
    hashedPassword: string,
) => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string) => {
    const validatedSecret = z.string().safeParse(process.env.JWT_SECRET);
    const validatedExpiresIn = z.string().safeParse(process.env.JWT_EXPIRES_IN);

    return jwt.sign(
        { userId },
        validatedSecret.success ? validatedSecret.data : "supersecret",
        {
            expiresIn: validatedExpiresIn.success
                ? validatedExpiresIn.data
                : "14d",
        },
    );
};

// Verify token
export const verifyToken = (token: string) => {
    const validatedSecret = z.string().safeParse(process.env.JWT_SECRET);
    return jwt.verify(
        token,
        validatedSecret.success ? validatedSecret.data : "supersecret",
    );
};
