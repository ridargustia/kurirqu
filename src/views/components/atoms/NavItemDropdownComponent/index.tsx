import Link from "next/link";
import { useState } from "react";

type NavItemDropdownComponentProps = {
    menuController: string,
    dataTarget: string,
    menuIcon: string,
    menuName: string,
    submenu: any,
    id?: number,
    submenuName?: string,
    submenuFunction?: string,
}

const NavItemDropdownComponent = ({ menuController, dataTarget, menuIcon, menuName, submenu }: NavItemDropdownComponentProps) => {
    const [isShow, setIsShow] = useState("");

    return(
        <li className="nav-item">
            <a className={`nav-link ${isShow == dataTarget ? '' : 'collapsed'}`} href="#" data-toggle="collapse" data-target={`#${dataTarget}`}
            aria-expanded={isShow != "" ? true : false} aria-controls="collapseBootstrap" onClick={() => setIsShow(isShow == "" ? dataTarget : isShow != dataTarget ? dataTarget : "")}>
                <i className={menuIcon}></i>
                <span>{menuName}</span>
            </a>
            <div id={dataTarget} className={`collapse ${isShow == dataTarget ? 'show' : ''}`} aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">{menuName}</h6>
                    {
                        submenu.map(({ id, submenuName, submenuFunction }: NavItemDropdownComponentProps) => {
                            return <Link key={id} className="collapse-item" href={`/${menuController}/${submenuFunction}`}>{submenuName}</Link>;
                        })
                    }
                </div>
            </div>
        </li>
    );
}

export default NavItemDropdownComponent;