import FooterSegment from "../Footer";
import MetaSegment from "../Meta";
import MetaFooterSegment from "../Meta/footer";
import SidebarSegment from "../Sidebar";
import TopbarSegment from "../Topbar";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <>
            <MetaSegment />
            <div id="wrapper">
                <SidebarSegment />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopbarSegment />
                        {children}
                    </div>
                    <FooterSegment />
                </div>
            </div>
            <MetaFooterSegment />
        </>
    );
}

export default AppShell;