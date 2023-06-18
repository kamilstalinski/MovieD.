import { Link } from "react-router-dom";

type CategoriesProps = {
  categoryList: string[] | null;
};

function Categories({ categoryList }: CategoriesProps) {
  return (
    <div className='categories container'>
      {categoryList?.map((genre) => {
        return (
          <Link key={Math.random()} to={`/${genre}`}>
            {genre}
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
