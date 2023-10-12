import { useEffect, useState } from "react";
import ButtonComponent from "../../atoms/ButtonComponent";
import CheckboxLoginComponent from "../../atoms/CheckboxLoginComponent";
import FormComponent from "../../atoms/FormComponent";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

type FormLoginProps = {
    callBack: Function
}

const FormLogin = ({ callBack }: FormLoginProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        callBack(error);
    }, [callBack, error]);

    const { push, query } = useRouter();

    const callbackUrl: any = query.callbackUrl || '/dashboard';
    const handleSubmit = async (event: any) => {
        // // Fitur Register
        // event.preventDefault();
        // setIsLoading(true);
        // setError("");
        // const data = {
        //     name: event.target.name.value,
        //     email: event.target.email.value,
        //     username: event.target.username.value,
        //     password: event.target.password.value,
        // }
        // const result = await fetch("/api/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });
        // if (result.status === 200) {
        //     event.target.reset();
        //     setIsLoading(false);
        //     push("login");
        // } else {
        //     setIsLoading(false);
        //     setError(result.status === 400 ? "Username already exists" : "");
        // }


        // Fitur Login
        event.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res: any = await signIn("credentials", {
                redirect: false,
                username: event.target.username.value,
                password: event.target.password.value,
                callbackUrl,
            });

            if(!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect");
            }
        } catch(error: any) {
            setIsLoading(false);
            setError("Email or password is incorrect");
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <FormComponent name="username" type="text" placeholder="Username" />
                <FormComponent name="password" type={showPassword ? "text" : "password"} placeholder="Password" />
                <CheckboxLoginComponent inputId="customCheck" title="Tampilkan Password" callBack={(value: boolean) => setShowPassword(value)} />
                <ButtonComponent typeButton="submit" style="btn btn-success btn-block" title={isLoading ? "Loading..." : "Login"} isDisable={isLoading} />
            </form>
            {/* <a href="#" onClick={() => signIn("google", {
                callbackUrl,
                redirect: false,
            })} className="btn btn-outline-primary btn-block">Login With Google</a> */}
        </>
    );
}

export default FormLogin;