import AppShell from "@/views/containers/organisms/AppShell";
import FormSegment from "@/views/containers/organisms/UserMenu/FormAddUser";
import TitlePageSegment from "@/views/containers/organisms/TitlePage";

const userCreate = () => {
    return(
        <AppShell>
            <div className="container-fluid" id="container-wrapper">
                <TitlePageSegment title="Tambah User" />
                <FormSegment />
            </div>
        </AppShell>
    );
}

export default userCreate;