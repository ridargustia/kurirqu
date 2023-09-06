type ButtonComponentProps = {
    typeButton: any,
    style: string,
    title: string,
    isDisable: boolean,
}
const ButtonComponent = ({ typeButton, style, title, isDisable }: ButtonComponentProps) => {
    return(
        <div className="form-group">
            <button type={typeButton} className={style} disabled={isDisable}>{title}</button>
        </div>
    );
}

export default ButtonComponent;