import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import AuthInput from "@/form/AuthInput";
import { createUser } from "@/db/user";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

export const Route = createFileRoute("/_auth/register")({
    component: RegisterPage,
});

const schema = z.object({
    email: z.string().email("請輸入有效的電子信箱"),
    username: z.string().min(1, "請輸入姓名"),
    phoneNumber: z.string().min(1, "請輸入手機號碼"),
    password: z.string().min(6, "密碼至少需要6個字元"),
    confirmPassword: z.string(),
    agreeTerm: z.boolean().refine((val) => val === true, "請同意使用規範"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "密碼不一致",
    path: ["confirmPassword"],
});

type FormValues = z.infer<typeof schema>;

function RegisterPage() {
    const navigate = useNavigate();

    const { isPending, mutate } = useMutation({
        mutationFn: createUser,
        onSuccess(responseData) {
            if (responseData.success) {
                localStorage.setItem("token", responseData.token);
                navigate({ to: "/", replace: true });
            }
        },
    });

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            username: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            agreeTerm: false,
        },
        validators: {
            onSubmit: schema,
        },
        onSubmit: async ({ value }) => {
            mutate({ data: value });
        },
    });

    return (
        <div className="space-y-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    void form.handleSubmit();
                }}
                className="space-y-4"
            >
                <form.Field
                    name="username"
                    children={(field) => (
                        <AuthInput
                            placeholder="請輸入姓名"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            error={field.state.meta.errors?.[0]?.toString()}
                        >
                            姓名
                        </AuthInput>
                    )}
                />

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
                        >
                            電子信箱
                        </AuthInput>
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
                        >
                            密碼
                        </AuthInput>
                    )}
                />

                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <AuthInput
                            type="password"
                            placeholder="請再輸入一次密碼"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            error={field.state.meta.errors?.[0]?.toString()}
                        >
                            確認密碼
                        </AuthInput>
                    )}
                />

                <form.Field
                    name="phoneNumber"
                    children={(field) => (
                        <AuthInput
                            placeholder="請輸入手機號碼"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            error={field.state.meta.errors?.[0]?.toString()}
                        >
                            手機號碼
                        </AuthInput>
                    )}
                />

                <form.Field
                    name="agreeTerm"
                    children={(field) => (
                        <div className="flex items-center gap-2">
                            <Checkbox
                                className="size-6 bg-white"
                                checked={field.state.value}
                                onCheckedChange={(checked) => {
                                    field.handleChange(checked === true);
                                }}
                            />
                            <label className="text-white">
                                我已閱讀並同意本網站個資使用規範
                            </label>
                            {field.state.meta.errors && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button
                            type="submit"
                            className="bg-neutral-40 text-neutral-60 h-14 w-full py-4"
                            disabled={isPending || !canSubmit}
                        >
                            {isSubmitting ? "註冊中..." : "註冊"}
                        </Button>
                    )}
                />
            </form>

            <div className="flex gap-2 text-white">
                <p>已經有會員了嗎？</p>
                <Link to="/login" className="text-primary-100">
                    立即登入
                </Link>
            </div>
        </div>
    );
}
