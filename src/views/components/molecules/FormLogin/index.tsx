import { useState } from "react";
import ButtonComponent from "../../atoms/ButtonComponent";
import CheckboxLoginComponent from "../../atoms/CheckboxLoginComponent";
import FormComponent from "../../atoms/FormComponent";

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return(
        <form action="">
            <FormComponent name="username" type="text" placeholder="Username" />
            <FormComponent name="password" type={showPassword ? "text" : "password"} placeholder="Password" />
            <CheckboxLoginComponent inputId="customCheck" title="Tampilkan Password" callBack={(value: boolean) => setShowPassword(value)} />
            <ButtonComponent typeButton="submit" style="btn btn-primary btn-block" title="Login" />
        </form>
    );
}

export default FormLogin;