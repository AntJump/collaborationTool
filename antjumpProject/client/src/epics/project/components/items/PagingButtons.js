import { Button } from "@mui/material";
import PagingAfterButton from "./PagingAfterButton";
import PagingBeforeButton from "./PagingBeforeButton";




function PagingButtons({onClickHandler, currentPage, pagingInfo}){

    console.log("currentPage:", currentPage);
    console.log("pagingInfo:", pagingInfo);
    const pageButtonNum = [];
    if(pagingInfo){
        for(let i = pagingInfo.startPage; i <= pagingInfo.endPage; i++){
            pageButtonNum.push(i);
        }

    }

    console.log("pageButtonNum : ",pageButtonNum);

    return (
        <>
            <PagingBeforeButton onClickHandler={onClickHandler} currentPage={currentPage}/>

            {Array.isArray(pageButtonNum) && 
                pageButtonNum.map((num)=>
                    <li key={num} onClick={() => onClickHandler(num)} style={{  listStyle: 'none'}}>
                        {currentPage === num ? 
                            <Button color="grey">{num}</Button>
                            :
                            <Button color="blackline">{num}</Button>
                        }
                    
                    </li>
                )
            }

            <PagingAfterButton onClickHandler={onClickHandler} currentPage={currentPage} pagingInfo={pagingInfo}/>


        </>
    );
}

export default PagingButtons; 