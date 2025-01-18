import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { createUser } from "@/db/user";
import { registerSchema } from "@/utils/schema";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/register")({
    component: RegisterPage,
});

function RegisterPage() {
    const navigate = useNavigate();
    const form = useForm({
        defaultValues: {
            email: "",
            username: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            agreeTerm: false,
        },
        validators: {
            onChange: registerSchema,
        },
        onSubmit(data) {
            mutate(
                {
                    data,
                },
                {
                    onSuccess(responseData) {
                        if (responseData.success) {
                            localStorage.setItem("token", responseData.token);
                            navigate({ to: "/", replace: true });
                        }
                    },
                    onError(error) {
                        const err = JSON.parse(error.message) as {
                            body: {
                                result: {
                                    success: boolean;
                                    message: string;
                                };
                            };
                        };
                        // form.setFieldMeta("email", {
                        //     message: err.body.result.message,
                        // });
                        form.setFieldMeta("email", (field) => ({
                            ...field,
                            errors: [err.body.result.message],
                        }));
                    },
                },
            );
        },
    });

    const { isPending, mutate } = useMutation({
        mutationFn: createUser,
    });

    return (
        <div className="space-y-4">
            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <form.Field
                    name="username"
                    children={(field) => (
                        <>
                            <label
                                id={field.name}
                                className="inline-block text-white"
                            >
                                姓名
                            </label>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="請輸入姓名"
                                className="rounded-lg bg-white p-4"
                            />
                            {field.state.meta.errors[0] && (
                                <p className="text-error-120">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </>
                    )}
                />
                <form.Field
                    name="email"
                    children={(field) => (
                        <>
                            <label
                                id={field.name}
                                className="inline-block text-white"
                            >
                                電子信箱
                            </label>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="hello@exsample.com"
                                className="rounded-lg bg-white p-4"
                            />
                            {field.state.meta.errors[0] && (
                                <p className="text-error-120">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </>
                    )}
                />

                <form.Field
                    name="password"
                    children={(field) => (
                        <>
                            <label
                                id={field.name}
                                className="inline-block text-white"
                            >
                                密碼
                            </label>
                            <Input
                                id={field.name}
                                type="password"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="請輸入密碼"
                                className="rounded-lg bg-white p-4"
                            />
                            {field.state.meta.errors[0] && (
                                <p className="text-error-120">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </>
                    )}
                />

                <form.Field
                    name="confirmPassword"
                    children={(field) => (
                        <>
                            <label
                                id={field.name}
                                className="inline-block text-white"
                            >
                                確認密碼
                            </label>
                            <Input
                                id={field.name}
                                type="password"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="請再輸入一次密碼"
                                className="rounded-lg bg-white p-4"
                            />
                            {field.state.meta.errors[0] && (
                                <p className="text-error-120">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </>
                    )}
                />

                <form.Field
                    name="phoneNumber"
                    children={(field) => (
                        <>
                            <label
                                id={field.name}
                                className="inline-block text-white"
                            >
                                手機號碼
                            </label>
                            <Input
                                id={field.name}
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                                placeholder="請輸入手機號碼"
                                className="rounded-lg bg-white p-4"
                            />
                            {field.state.meta.errors[0] && (
                                <p className="text-error-120">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </>
                    )}
                />

                <form.Field
                    name="agreeTerm"
                    children={(field) => (
                        <>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    className="size-6 bg-white"
                                    checked={field.state.value}
                                    onCheckedChange={(e) =>
                                        field.handleChange(Boolean(e))
                                    }
                                />
                                <label className="text-white">
                                    我已閱讀並同意本網站個資使用規範
                                </label>
                            </div>
                            {field.state.meta.errors[0] && (
                                <p className="text-error-120">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </>
                    )}
                />

                <form.Subscribe
                    selector={(state) => [state.canSubmit]}
                    children={([canSubmit]) => (
                        <Button
                            type="submit"
                            className="bg-neutral-40 text-neutral-60 h-14 w-full py-4"
                            disabled={isPending || !canSubmit}
                        >
                            註冊
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
