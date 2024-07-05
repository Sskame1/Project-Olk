import React from 'react';

import style from './Search.module.css';

import { LiaSearchSolid } from "react-icons/lia";

function Search() {
  return (
    <div className={style.container}>
        <div className={style.container__search}>
            <LiaSearchSolid />
            <input type="text" className={style.search__input}/>
        </div>
    </div>
  )
}

export default Search;