import React, { useContext } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import FavoriteContext from '../../contexts/Favorites/context';

import './styles.css';

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  const { favorites } = useContext(FavoriteContext);
  return (
    <div className="pagination-container">
      <div className="favorites">{favorites.length}💗</div>
      <button className="btn" onClick={onLeftClick}>
        <BsFillArrowLeftCircleFill className="arrow-left" size="40px" />
      </button>
      <div className="page">
        {page} de {totalPages}
      </div>
      <button className="btn" onClick={onRightClick}>
        <BsFillArrowRightCircleFill className="arrow-right" size="40px" />
      </button>
    </div>
  );
};
export default Pagination;
