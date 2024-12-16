import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/Form";
import AuthInput from "@/form/AuthInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/_auth/login")({
    component: LoginPage,
});

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    remember: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

function LoginPage() {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            remember: true,
        },
    });

    return (
        <div className="space-y-10">
            <Form {...form}>
                <form className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <AuthInput
                                {...field}
                                placeholder="hello@exsample.com"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field, fieldState }) => (
                            <AuthInput
                                {...field}
                                type="password"
                                placeholder="請輸入密碼"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="remember"
                        render={({ field }) => (
                            <div className="flex items-center justify-between">
                                <FormItem className="flex items-center gap-2">
                                    <FormControl>
                                        <Checkbox
                                            className="size-6 bg-white"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel className="text-white">
                                        記住帳號
                                    </FormLabel>
                                </FormItem>
                                <Link
                                    to="."
                                    className="text-primary-100 text-sm"
                                >
                                    忘記密碼？
                                </Link>
                            </div>
                        )}
                    />
                </form>
            </Form>

            <Button className="bg-neutral-40 text-neutral-60 h-14 w-full py-4">
                會員登入
            </Button>

            <div className="flex items-center gap-2">
                <p className="font-medium text-white">沒有會員嗎？</p>
                <Link to="/register" className="text-primary-100">
                    前往註冊
                </Link>
            </div>
        </div>
    );
}
