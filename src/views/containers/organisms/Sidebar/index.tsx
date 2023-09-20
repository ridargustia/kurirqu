import Image from "next/image";
import { useSelector } from "react-redux";
import icon from "../../../../../public/favicon.ico";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import SettingMenu from "@/views/components/molecules/SettingMenu";
import NavItemComponent from "@/views/components/atoms/NavItemComponent";

const SidebarSegment = () => {
    const isToggled = useSelector((state: any) => state.sidebarToggleTop.data);

    return (
        <ul className={`navbar-nav sidebar sidebar-light accordion ${isToggled && "toggled"}`} id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" href={"/dashboard"} style={{background: "#239E55"}}>
                <div className="sidebar-brand-icon">
                    <Image src={icon} className={styles.size_image} alt="kurirqu" />
                </div>
                <div className="sidebar-brand-text mx-3">KURIRQU</div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <NavItemComponent menuController="dashboard" menuFunction="" menuIcon="fas fa-fw fa-tachometer-alt" menuName="Dashboard" />
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
                Features
            </div>
            {/* <li className="nav-item">
                <a className={`nav-link ${isShow ? '' : 'collapsed'}`} href="#" data-toggle="collapse" data-target="#collapseBootstrap"
                aria-expanded={isShow} aria-controls="collapseBootstrap" onClick={() => setIsShow(!isShow)}>
                    <i className="far fa-fw fa-window-maximize"></i>
                    <span>Bootstrap UI</span>
                </a>
                <div id="collapseBootstrap" className={`collapse ${isShow && 'show'}`} aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Bootstrap UI</h6>
                        <a className="collapse-item" href="alerts.html">Alerts</a>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                    </div>
                </div>
            </li> */}
            <hr className="sidebar-divider" />
            <SettingMenu />
            <hr className="sidebar-divider" />
            <div className="version" id="version-ruangadmin">version 1.1</div>
        </ul>
    );
}

export default SidebarSegment;