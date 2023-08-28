import { useEffect, useState } from "react";

type CheckboxLoginComponentProps = {
    inputId: string,
    title: string,
    callBack: Function,
}
const CheckboxLoginComponent = ({ inputId, title, callBack }: CheckboxLoginComponentProps) => {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        callBack(showPassword);
    }, [showPassword, callBack]);

    return(
        <div className="form-group">
            <div className="custom-control custom-checkbox small" style={{lineHeight: "1.5rem"}}>
                <input type="checkbox" className="custom-control-input" id={inputId} onClick={() => setShowPassword(!showPassword)} />
                <label className="custom-control-label" htmlFor="customCheck">{title}</label>
            </div>
        </div>
    );
}

export default CheckboxLoginComponent;