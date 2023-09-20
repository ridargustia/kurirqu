import { useState } from "react";
import DropdownMenu from "../DropdownMenu";
import avatar from "./../../../../../public/assets/images/avatars/boy.png";
import styles from "./TopToggleNavigation.module.scss";
import Image from "next/image";

const TopToggleNavigation = () => {
    const [isShow, setIsShow] = useState(false);

    return(
        <ul className="navbar-nav ml-auto">
            <div className="topbar-divider d-none d-sm-block"></div>
            <li className={`nav-item dropdown no-arrow ${isShow && 'show'}`}>
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded={isShow} onClick={() => setIsShow(!isShow)}>
                    <Image className={`img-profile rounded-circle ${styles.width_image}`} src={avatar} alt="avatar" />
                    <span className="ml-2 d-none d-lg-inline text-white small">Ridar Gustia</span>
                </a>
                <DropdownMenu isShow={isShow} />
            </li>
        </ul>
    );
}

export default TopToggleNavigation;