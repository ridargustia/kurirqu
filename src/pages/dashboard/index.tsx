import { signOut } from "next-auth/react";

const Dashboard = () => {
    return (
        <div>
            <h3>Dashboard Page</h3>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    );
}

export default Dashboard;