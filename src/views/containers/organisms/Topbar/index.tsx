import SidebarToggleTopComponent from "@/views/components/atoms/SidebarToggleTopComponent";
import TopToggleNavigation from "@/views/components/molecules/TopToggleNavigation";

const TopbarSegment = () => {

    return(
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top" style={{background: "#34BA6A"}}>
          <SidebarToggleTopComponent />
          <TopToggleNavigation />
        </nav>
    );
};

export default TopbarSegment;