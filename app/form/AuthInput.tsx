import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { ComponentProps } from "react";

type Props = ComponentProps<"input"> & { error?: string };

const AuthInput = (props: Props) => {
    return (
        <div>
            <FormItem>
                <FormLabel className="inline-block text-white">姓名</FormLabel>
                <FormControl>
                    <Input
                        {...props}
                        className="h-14 rounded-lg bg-white p-4 lg:text-base"
                    />
                </FormControl>
                {props.error && (
                    <FormDescription className="text-error-120">
                        {props.error}
                    </FormDescription>
                )}
            </FormItem>
        </div>
    );
};

export default AuthInput;
