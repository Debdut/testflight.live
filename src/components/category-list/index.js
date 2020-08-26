const CategoryList = ({ categories }) => (
  <ul class='mt-4'>
    {categories.map((category, index) => <Category key={index} category={category} />)}
  </ul>
)

const Category = ({ category }) => (
  <li class='list p-2 pl-4'>
    <a href={`/category/${category.name}`}>{category.name}</a>
  </li>
)

export default CategoryList