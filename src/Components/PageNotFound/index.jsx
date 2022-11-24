import React from 'react';
import ImgErro from '../../assets/jynx-seeklogo.com.svg';
import './styles.css';

const PageNotFound = () => {
  return (
    <div className="not-found">
      <img className="image-not-found" src={ImgErro} />
      <span className="not-found-text"> opss....Resultado não encontrado!!! </span>
    </div>
  );
};

export default PageNotFound;
