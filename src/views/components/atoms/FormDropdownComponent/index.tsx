type FormDropdownComponentProps = {
    label: string,
    name: string,
    data: any,
    onChange: Function,
    required?: boolean,
}

const FormDropdownComponent = ({
    label,
    name,
    data,
    onChange,
    required,
}: FormDropdownComponentProps) => {
    return(
        <div className="form-group">
            <label>{label}</label>
            <select className="form-control" name={name} id={name} required={required} onChange={(e) => onChange(e)}>
                <option value="">- Pilih {label} -</option>
                {
                    data.map((opt: any) => {
                        return (
                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default FormDropdownComponent;