type AlertComponentProps = {
    title: string,
    icon: string,
    style: string,
}

const AlertComponent = ({ title, icon, style }: AlertComponentProps) => {
    return (
        <div className={`alert ${style}`} role="alert">
            <h6 className='mt-2'>
                <i className={icon}></i>
                <b className="ml-2">{title}</b>
            </h6>
        </div>
    );
}

export default AlertComponent;