const CategoryList = ({ categories }) => (
  <ul class='mt-4'>
    {categories.map((category, index) => <Category key={index} category={category} />)}
  </ul>
)

const Category = ({ category }) => (
  <li class='border-b p-2 pl-4'>
    <a href={`/category/${category.id}`}>{category.name}</a>
  </li>
)

export default CategoryList