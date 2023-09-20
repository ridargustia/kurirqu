import Link from "next/link";

type NavItemComponentProps = {
    menuController: string,
    menuFunction: string,
    menuIcon: string,
    menuName: string,
}
const NavItemComponent = ({ menuController, menuFunction, menuIcon, menuName }: NavItemComponentProps) => {
    return(
        <li className="nav-item">
            <Link className="nav-link" href={`/${menuController}/${menuFunction}`}>
                <i className={menuIcon}></i>
                <span>{menuName}</span>
            </Link>
        </li>
    );
}

export default NavItemComponent;