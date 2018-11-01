import Link from "next/link";
import { getPaginations } from "../utils";

export default props => {
  const { pageCount, currentPage = 1 } = props;
  const paginationArray = getPaginations(pageCount, currentPage);

  return (
    <div>
      {paginationArray.map(i => (
        <Link href={`/page/${i}`} key={`page-${i}`}>
          <a className="page-number">{i}</a>
        </Link>
      ))}
      <style jsx>{`
        text-align: center;
        .page-number {
          margin-right: 15px;
        }
        .page-number:nth-child(${currentPage}) {
          cursor: text;
        }
        .page-number:nth-child(${currentPage}):hover {
          color: black;
        }
      `}</style>
    </div>
  );
};
