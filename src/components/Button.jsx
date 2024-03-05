export default function Button({ curPage, children, ...props }) {
  let cssStyle =
    "px-2 py-1 bg-white rounded-md text-blue-600 hover:bg-stone-300";
  //   if (curPage === children) {
  //     cssStyle = "px-2 py-1 bg-blue-700 text-white border-2 border-white rounded-md";
  //   }
  return (
    <button className={cssStyle} {...props}>
      {children}
    </button>
  );
}
