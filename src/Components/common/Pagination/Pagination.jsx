import React, {useState} from 'react';
import s from './Pagination.module.css';


 let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil (totalItemsCount / pageSize)
    
        let pages = []
        for( let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        let portionCount = Math.ceil (pagesCount / portionSize)
        let [portionNumber, setPortionNumber] = useState(1)
        let leftPortionNumber = (portionNumber - 1) * portionSize + 1
        let rightPortionNumber = portionNumber * portionSize

    return <div className={s.pagination}>
        { portionNumber > 1 &&
            <button onClick={ () => {setPortionNumber( portionNumber - 1 ) }}> PREV </button>
        }
        
        { pages.filter( p => p >= leftPortionNumber && p <= rightPortionNumber )
        .map( p => {
          return <span className={ currentPage === p && s.selectedPage} onClick={ () => {onPageChanged(p)} }> {p} </span> 
        }) }
         { portionNumber < portionCount &&
            <button onClick={ () => { setPortionNumber( portionNumber + 1 ) }}> NEXT </button>
        }
    </div>
    

 }

 export default Pagination;