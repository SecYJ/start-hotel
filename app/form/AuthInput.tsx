import { Input } from "@/components/ui/Input";
import { ComponentProps } from "react";

type Props = ComponentProps<"input"> & { error?: string };

const AuthInput = (props: Props) => {
    return (
        <div>
            <div className="space-y-2">
                <label className="inline-block text-white">姓名</label>
                <div>
                    <Input
                        {...props}
                        className="h-14 rounded-lg bg-white p-4 lg:text-base"
                    />
                </div>
                {props.error && <p className="text-error-120">{props.error}</p>}
            </div>
        </div>
    );
};

export default AuthInput;
