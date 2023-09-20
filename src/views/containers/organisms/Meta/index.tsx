import Head from "next/head";

const MetaSegment = () => {
    return(
        <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Dashboard | Kurirqu</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="http://localhost:3000/assets/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
            <link href="http://localhost:3000/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link href="http://localhost:3000/assets/css/ruang-admin.min.css" rel="stylesheet" />
        </Head>
    );
}

export default MetaSegment;