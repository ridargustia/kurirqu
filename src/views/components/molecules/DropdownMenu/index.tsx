import { dropdownItem } from "@/utils/data/static";
import { signOut } from "next-auth/react";
import DropdownItemComponent from "../../atoms/DropdownItemComponent";

type DropdownMenuProps = {
    isShow: boolean,
}

const DropdownMenu = ({ isShow }: DropdownMenuProps) => {
    return(
        <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isShow && 'show'}`} aria-labelledby="userDropdown">
            {
                dropdownItem.map((data) => {
                    const { id, title, path, style } = data;
                    return(
                        <DropdownItemComponent key={id} title={title} path={path} style={style} />
                    );
                })
            }
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onClick={() => signOut()}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </a>
        </div>
    );
}

export default DropdownMenu;