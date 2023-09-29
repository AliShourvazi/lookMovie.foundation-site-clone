import { useDispatch, useSelector } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import './SinglePagePagination.css';

function SinglePagePagination(props) {
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();
  const isActive = currentPage === props.pageNumber;

  return (
    <li className={`page-item .pagination ${isActive ? 'active' : ''}`}>
      <a
        onClick={() =>
          dispatch({ type: "CHANGE_CURRENT_PAGE", value: props.pageNumber })
        }
        className="page-link"
        href="#"
      >
        {props.pageNumber}
      </a>
    </li>
  );
}

export default SinglePagePagination;
