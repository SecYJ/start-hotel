import { generateToken, hashPassword } from "@/utils/auth";
import prisma from "@/prisma/prisma";
import { createServerFn } from "@tanstack/start";
import { setResponseStatus } from "vinxi/http";
import { z } from "zod";
import { userSchema } from "@/utils/schema";

export const roomSchema = z.object({
    id: z.string(),
    roomNumber: z.number(),
    price: z.number(),
    isAvailable: z.boolean(),
    categoryId: z.string(),
});

export const createUser = createServerFn({ method: "POST" })
    .validator((user: unknown) => userSchema.parse(user))
    .handler(async (ctx) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const isEmailExists = await prisma.user.findUnique({
            where: {
                email: ctx.data.email,
            },
        });

        if (isEmailExists) {
            setResponseStatus(400);

            return {
                success: false,
                message: "Email already exists",
            } as const;
        }

        const newUser = await prisma.user.create({
            data: {
                ...ctx.data,
                password: await hashPassword(ctx.data.password),
            },
        });

        return {
            success: true,
            token: generateToken(newUser.id),
        } as const;
    });
