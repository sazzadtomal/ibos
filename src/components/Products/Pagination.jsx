

const style="p-4 flex justify-center items-center border"


const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage}) => {
    const pageNumbers = [];

    const total_pages=Math.ceil(totalPosts / postsPerPage)
  
    for (let i = 1; i <= total_pages; i++) {
      pageNumbers.push(i);
    }


    const handlePrevious=()=>{
       if(currentPage>1){
          paginate(currentPage-1)
       }
    }
    const handleNext=()=>{
       if(currentPage<total_pages){
          paginate(currentPage+1)
       }
    }


  
    return (
     
        <ul className='flex text-[1.4] muted [&>*]:cursor-pointer'>
          <div onClick={handlePrevious} className={`${currentPage>1 ? "text-black" : " " } ${style} `}>{"<"}</div>
          {pageNumbers.map(number => (
            <li key={number}>
              <div onClick={() => paginate(number)} className={`${number==currentPage ? "text-black" : " "} ${style}`} >
                {number}
              </div>
            </li>
          ))}
          <div onClick={handleNext} className={`${currentPage<total_pages ? "text-black" : "" } ${style}`} >{">"}</div>
        </ul>

        
    
    );
  };
  
  export default Pagination;