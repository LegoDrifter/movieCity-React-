import { useState } from "react";
import Button from "./Button";

export default function AltPagination({ data, url, changePage, noData }) {
  //   console.log(url.toString());
  let curPageInitial = 1;
  if (!url.includes("page=")) {
    curPageInitial = 1;
  } else {
    curPageInitial = Number(url.slice(url.lastIndexOf("=") + 1, url.length));
  }

  //   console.log(curPageInitial);
  const [curPage, setCurPage] = useState(curPageInitial);

  function handlePageChange(identifier, page) {
    if (page === 1 && identifier == "-") return;
    if (identifier === "+") {
      //   console.log(data.next);
      changePage(`https://moviesdatabase.p.rapidapi.com${data.next}`);
      //   setCurPage((prevState) => prevState + 1);
    } else if (identifier === "-") {
      setCurPage((prevState) => prevState - 1);
      setCurPage((curPage) => {
        const newPage = curPage.toString();
        const newUrl = url.slice(0, url.lastIndexOf("=") + 1);
        // console.log(`${newUrl}${newPage}`);
        changePage(`${newUrl}${newPage}`);
        return curPage;
      });
    }
  }

  return (
    <div className="mt-10 mb-10 flex gap-3 justify-center">
      {curPage === 1 ? (
        ""
      ) : (
        <Button
          onClick={() => {
            handlePageChange("-", curPage);
          }}
        >
          Prev
        </Button>
      )}

      <span className="text-white font-bold pt-1">{curPage}</span>
      {noData ? (
        ""
      ) : (
        <Button
          onClick={() => {
            handlePageChange("+", curPage);
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
}
