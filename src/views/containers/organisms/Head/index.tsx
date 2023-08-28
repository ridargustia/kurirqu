import Head from "next/head";
const HeadSegment = () => {
    return(
        <>
            <Head>
                <title>Login | Kurirqu</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="http://localhost:3000/assets/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="http://localhost:3000/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="http://localhost:3000/assets/css/ruang-admin.min.css" rel="stylesheet" />
            </Head>
        </>
    );
}

export default HeadSegment;