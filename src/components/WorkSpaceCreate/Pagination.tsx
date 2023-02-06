import {FC} from 'react'
interface PaginationProps {
  count: number[],
  current: number
}

const Pagination: FC<PaginationProps> = ({count, current}) => {
  return (
    <div className="pagination gap-[1.5rem] flex justify-center">
      {
        count.map(el =>
        <div
          key={el}
          className={`rounded-[50%] w-[8px] h-[8px] bg-[rgba(229,231,235,1)] ${el === current ? 'current' : ''}`}
        ></div>)
      }
    </div>
  );
};

export default Pagination;