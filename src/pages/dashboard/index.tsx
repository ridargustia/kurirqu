import AppShell from "@/views/containers/organisms/AppShell";
import CardSegment from "@/views/containers/organisms/Card";
import TitlePageSegment from "@/views/containers/organisms/TitlePage";

const Dashboard = () => {
    return (
        <AppShell>
            <div className="container-fluid" id="container-wrapper">
                <TitlePageSegment title="Dashboard"/>
                <CardSegment />
            </div>
        </AppShell>
    );
}

export default Dashboard;