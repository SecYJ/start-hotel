import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { createUser } from "@/db/user";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { registerSchema } from "@/utils/schema";

export const Route = createFileRoute("/_auth/register")({
    component: RegisterPage,
});

function RegisterPage() {
    const navigate = useNavigate();

    console.log("rerender");

    const { isPending, mutate } = useMutation({
        mutationFn: createUser,
    });

    const form = useForm({
        validators: {
            onSubmit: registerSchema,
        },
        defaultValues: {
            email: "",
            username: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            agreeTerm: false,
        },
        onSubmit: async ({ value }) => {
            mutate(
                {
                    data: value,
                },
                {
                    onSuccess(responseData) {
                        if (responseData.success) {
                            localStorage.setItem("token", responseData.token);
                            navigate({ to: "/", replace: true });
                        }
                    },
                    onError() {
                        form.setFieldValue("email", "");
                    },
                },
            );
        },
    });

    return (
        <div className="space-y-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <form.Field
                    name="username"
                    children={(field) => (
                        <div>
                            <label className="inline-block text-white">
                                姓名
                            </label>
                            <div>
                                <Input
                                    placeholder="請輸入姓名"
                                    className="rounded-lg bg-white p-4"
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                />
                            </div>
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />
                <form.Field
                    name="email"
                    children={(field) => (
                        <div>
                            <label className="inline-block text-white">
                                電子信箱
                            </label>
                            <div>
                                <Input
                                    placeholder="hello@example.com"
                                    className="rounded-lg bg-white p-4"
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                />
                            </div>
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />
                <form.Field
                    name="password"
                    children={(field) => (
                        <div>
                            <label className="inline-block text-white">
                                密碼
                            </label>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="請輸入密碼"
                                    className="rounded-lg bg-white p-4"
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                />
                            </div>
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />
                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <div>
                            <label className="inline-block text-white">
                                確認密碼
                            </label>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="請再輸入一次密碼"
                                    className="rounded-lg bg-white p-4"
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                />
                            </div>
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />
                <form.Field
                    name="phoneNumber"
                    children={(field) => (
                        <div>
                            <label className="inline-block text-white">
                                手機號碼
                            </label>
                            <div>
                                <Input
                                    placeholder="請輸入手機號碼"
                                    className="rounded-lg bg-white p-4"
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                        field.handleChange(e.target.value)
                                    }
                                />
                            </div>
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <form.Field
                    name="agreeTerm"
                    children={(field) => (
                        <div>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    className="size-6 bg-white"
                                    checked={field.state.value}
                                    onCheckedChange={(e) => {
                                        field.handleChange(e as boolean);
                                    }}
                                />
                                <label className="text-white">
                                    我已閱讀並同意本網站個資使用規範
                                </label>
                            </div>
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-error-120">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <form.Subscribe
                    selector={(state) => {
                        console.log("Can submit:", state.canSubmit);
                        return [state.canSubmit, state.isSubmitting];
                    }}
                    children={([canSubmit, isSubmitting]) => (
                        <Button
                            type="submit"
                            className="bg-neutral-40 text-neutral-60 h-14 w-full py-4"
                            disabled={isPending || !canSubmit}
                        >
                            {isSubmitting ? "註冊中, 请稍等..." : "註冊"}
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

export default RegisterPage;
