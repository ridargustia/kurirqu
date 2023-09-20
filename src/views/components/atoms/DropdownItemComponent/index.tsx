import Link from "next/link";

type DropdownItemComponentProps = {
    title: string,
    path: string,
    style: string,
}

const DropdownItemComponent = ({ title, path, style }: DropdownItemComponentProps) => {
    return(
        <Link className="dropdown-item" href={path}>
            <i className={style}></i>
            {title}
        </Link>
    );
}

export default DropdownItemComponent;