import { menuSettingItem } from "@/utils/data/static";
import NavItemDropdownComponent from "../../atoms/NavItemDropdownComponent";
import NavItemComponent from "../../atoms/NavItemComponent";

const SettingMenu = () => {
    return(
        <>
            <div className="sidebar-heading">
                Settings
            </div>
            {
                menuSettingItem.map(({
                    id,
                    menuName,
                    menuController,
                    menuFunction,
                    menuIcon,
                    isActive,
                    dataTarget,
                    submenu,
                }) => {
                    return(
                        isActive ?
                            submenu.length > 0 ? (
                                <NavItemDropdownComponent key={id} menuController={menuController} dataTarget={dataTarget} menuIcon={menuIcon} menuName={menuName} submenu={submenu} />
                            ) : (
                                <NavItemComponent key={id} menuController={menuController} menuFunction={menuFunction} menuIcon={menuIcon} menuName={menuName} />
                            )
                        : null
                    );
                })
            }
        </>
    );
}

export default SettingMenu;