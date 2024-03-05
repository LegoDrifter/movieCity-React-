import Button from "./Button";

export default function Pagination({ numPages, url, changePage }) {
  const pages = Array.from({ length: numPages }, (_, index) => index + 1);
  let curPage = Number(url.slice(url.lastIndexOf("=") + 1, url.length));
  console.log(curPage);

  function handlePageChange(page) {
    const newPage = page.toString();
    console.log(newPage);
    const newUrl = url.slice(0, url.lastIndexOf("=") + 1);
    console.log(`${newUrl}${newPage}`);
    changePage(`${newUrl}${newPage}`);
    curPage = page;
  }

  return (
    <div className="mt-5">
      <ul className="flex gap-4">
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <Button curPage={curPage} onClick={() => handlePageChange(page)}>
                {page}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
