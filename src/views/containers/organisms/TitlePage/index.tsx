import Link from "next/link";

type TitlePageSegmentProps = {
    title: string,
}

const TitlePageSegment = ({ title }: TitlePageSegmentProps) => {
    return(
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{title}</h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href={"/dashboard"}>Dashboard</Link></li>
                {title == 'Dashboard' ? '' : (<li className="breadcrumb-item active" aria-current="page">{title}</li>)}
            </ol>
        </div>
    );
}

export default TitlePageSegment;