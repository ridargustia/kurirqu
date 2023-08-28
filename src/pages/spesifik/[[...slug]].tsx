import { useRouter } from "next/router";

const DetailSpesifikUser = () => {
    const { query } = useRouter();

    return (
        <div>
            <h5>Detail Spesifik Parameter : {`${query.slug && query.slug[0] + " - " + query.slug[1]}`}</h5>
        </div>
    );
}

export default DetailSpesifikUser;