type FormComponentProps = {
    name: string,
    type: string,
    placeholder: string,
}

const FormComponent = (props: FormComponentProps) => {
    const { name, type, placeholder } = props;

    return(
        <div className="form-group">
            <input type={type} name={name} id={name} className="form-control" placeholder={placeholder} />
        </div>
    );
}

export default FormComponent;