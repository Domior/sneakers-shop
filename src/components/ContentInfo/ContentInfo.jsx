import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ContentInfo.module.scss';

const ContentInfo = ({ title, description, image }) => {
  return (
    <div
      className={`${styles.ContentInfo} d-flex align-center justify-center flex-column flex`}>
      <img
        className="mb-30"
        width="auto"
        height="auto"
        src={image}
        alt="smile"
      />
      <h2 className="mb-15">{title}</h2>
      <p className="opacity-6">{description}</p>
      <Link className={styles.greenButtonLink} to="/">
        <button className={`${styles.greenButton} greenButton`}>
          <img src="img/arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default ContentInfo;
