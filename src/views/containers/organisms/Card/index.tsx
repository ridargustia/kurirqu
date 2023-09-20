import { cardItem } from "@/utils/data/static";
import CardComponent from "@/views/components/atoms/CardComponent";

const CardSegment = () => {
    return(
        <div className="row mb-3">
            {
                cardItem.map(({ id, style, title }) => {
                    return(
                        <div key={id} className="col-xl-3 col-md-6 mb-4">
                            <CardComponent title={title} style={style} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CardSegment;