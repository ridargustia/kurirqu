type ButtonComponentProps = {
    typeButton: any,
    style: string,
    title: string,
}
const ButtonComponent = ({ typeButton, style, title }: ButtonComponentProps) => {
    return(
        <div className="form-group">
            <button type={typeButton} className={style}>{title}</button>
        </div>
    );
}

export default ButtonComponent;