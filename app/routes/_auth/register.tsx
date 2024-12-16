import { Button } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/Checkbox";

export const Route = createFileRoute("/_auth/register")({
    component: RegisterPage,
});

const schema = z.object({
    username: z.string(),
    email: z.string().email({ message: "Invalid email format" }),
    phoneNumber: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    agreeTerm: z.boolean().default(false),
});

type FormValues = z.infer<typeof schema>;

function RegisterPage() {
    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            username: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            agreeTerm: false,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("data", data);
    };

    return (
        <div className="space-y-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <FormItem>
                                <FormLabel className="inline-block text-white">
                                    姓名
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="請輸入姓名"
                                        className="rounded-lg bg-white p-4"
                                        {...field}
                                    />
                                </FormControl>
                                {invalid && (
                                    <FormDescription className="text-error-120">
                                        {error?.message}
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <FormItem>
                                <FormLabel className="inline-block text-white">
                                    電子信箱
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="hello@exsample.com"
                                        className="rounded-lg bg-white p-4"
                                        {...field}
                                    />
                                </FormControl>
                                {invalid && (
                                    <FormDescription className="text-error-120">
                                        {error?.message}
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <FormItem>
                                <FormLabel className="inline-block text-white">
                                    密碼
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="請輸入密碼"
                                        className="rounded-lg bg-white p-4"
                                        {...field}
                                    />
                                </FormControl>
                                {invalid && (
                                    <FormDescription className="text-error-120">
                                        {error?.message}
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <FormItem>
                                <FormLabel className="inline-block text-white">
                                    確認密碼
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="請再輸入一次密碼"
                                        className="rounded-lg bg-white p-4"
                                        {...field}
                                    />
                                </FormControl>
                                {invalid && (
                                    <FormDescription className="text-error-120">
                                        {error?.message}
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field, fieldState: { invalid, error } }) => (
                            <FormItem>
                                <FormLabel className="inline-block text-white">
                                    手機號碼
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="請輸入手機號碼"
                                        className="rounded-lg bg-white p-4"
                                        {...field}
                                    />
                                </FormControl>
                                {invalid && (
                                    <FormDescription className="text-error-120">
                                        {error?.message}
                                    </FormDescription>
                                )}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="agreeTerm"
                        render={({ field: { value, onChange } }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            className="size-6 bg-white"
                                            checked={value}
                                            onCheckedChange={onChange}
                                        />
                                        <FormLabel className="text-white">
                                            我已閱讀並同意本網站個資使用規範
                                        </FormLabel>
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="bg-neutral-40 text-neutral-60 h-14 w-full py-4"
                    >
                        註冊
                    </Button>
                </form>
            </Form>

            <div className="flex gap-2 text-white">
                <p>已經有會員了嗎？</p>
                <Link to="/login" className="text-primary-100">
                    立即登入
                </Link>
            </div>
        </div>
    );
}

export default RegisterPage;
