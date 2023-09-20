import AppShell from "@/views/containers/organisms/AppShell";
import { signOut } from "next-auth/react";

const User = () => {
    return(
        <AppShell>
            <div className="container-fluid" id="container-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Data Users</h1>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data Users</li>
                    </ol>
                </div>

                <div className="row mb-3">

                </div>
                <div className="row">
                    <button type="button" onClick={() => signOut()}>Logout</button>
                </div>
            </div>
        </AppShell>
    );
}

export default User;