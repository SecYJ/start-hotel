import { Button } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/_auth/register")({
    component: RegisterPage,
});

const schema = z.object({
    email: z.string(),
    username: z.string(),
    password: z.string(),
});

type FormValues = z.infer<typeof schema>;

function RegisterPage() {
    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            username: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("data", data);
    };

    return (
        <div className="mx-auto w-full max-w-[416px] space-y-4">
            <h1 className="grid space-y-2 font-bold">
                <span className="text-primary-100 text-sm">
                    享樂酒店，誠摯歡迎
                </span>
                <span className="text-3xl text-white">立即註冊</span>
            </h1>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
}

export default RegisterPage;
