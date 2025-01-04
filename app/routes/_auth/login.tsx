import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import AuthInput from "@/form/AuthInput";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
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
        defaultValues: {
            email: "",
            password: "",
            remember: true,
        },
        validators: {
            onSubmit: schema,
        },
        onSubmit: async ({ value }) => {
            console.log(value);
        },
    });

    return (
        <div className="space-y-10">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    void form.handleSubmit();
                }}
                className="space-y-4"
            >
                <form.Field
                    name="email"
                    children={(field) => (
                        <AuthInput
                            placeholder="hello@example.com"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            error={field.state.meta.errors?.[0]?.toString()}
                        />
                    )}
                />
                <form.Field
                    name="password"
                    children={(field) => (
                        <AuthInput
                            type="password"
                            placeholder="請輸入密碼"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            error={field.state.meta.errors?.[0]?.toString()}
                        />
                    )}
                />
                <form.Field
                    name="remember"
                    children={(field) => (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    className="size-6 bg-white"
                                    checked={field.state.value}
                                    onCheckedChange={(checked) => {
                                        field.handleChange(checked === true);
                                    }}
                                />
                                <label className="text-white">記住帳號</label>
                            </div>
                            <Link to="." className="text-primary-100 text-sm">
                                忘記密碼？
                            </Link>
                        </div>
                    )}
                />

                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button
                            type="submit"
                            className="bg-neutral-40 text-neutral-60 h-14 w-full py-4"
                            disabled={!canSubmit || isSubmitting}
                        >
                            {isSubmitting ? "登入中..." : "會員登入"}
                        </Button>
                    )}
                />
            </form>

            <div className="flex items-center gap-2">
                <p className="font-medium text-white">沒有會員嗎？</p>
                <Link to="/register" className="text-primary-100">
                    前往註冊
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;
