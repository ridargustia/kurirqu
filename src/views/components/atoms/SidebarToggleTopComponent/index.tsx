import { useDispatch, useSelector } from "react-redux";
import { setSidebarToggleTop } from "@/utils/redux/actions/sidebarToggleTopSlice";

const SidebarToggleTopComponent = () => {
    const isToggled = useSelector((state: any) => state.sidebarToggleTop.data);
    const dispatch = useDispatch();

    return(
        <button onClick={() => dispatch(setSidebarToggleTop(!isToggled))} id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>
    );
}

export default SidebarToggleTopComponent;