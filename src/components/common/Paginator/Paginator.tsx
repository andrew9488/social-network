import React, {useState} from "react";
import style from "./Paginator.module.css";

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    onClickCurrentPage: (page: number) => void
    currentPage: number
}

export const Paginator: React.FC<PaginatorPropsType> = React.memo((props) => {

    const [portionNumber, setPortionNumber] = useState<number>(1)

    let countPage = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }

    let portionSize = 10;
    let portionCount = Math.ceil((countPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>{`<`}</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => {
                    return <span key={index} onClick={() => {
                        props.onClickCurrentPage(p)
                    }}
                                 className={props.currentPage === p ? style.currentPage : ''}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>{`>`}</button>}
        </div>
    )
})
