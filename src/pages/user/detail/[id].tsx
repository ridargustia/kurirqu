import { useRouter } from "next/router";

const DetailUser = () => {
    const { query } = useRouter();

    return (
        <div>
            <h5>Detail User id : {query.id}</h5>
        </div>
    );
}

export default DetailUser;