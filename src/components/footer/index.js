const Footer = ({ categories }) => (
  <footer class='primary border-t border-gray-light-3'>
    <div className='container flex flex-wrap'>
      <Links />
      <Categories categories={categories} />
    </div>
  </footer>
)

const Links = () => {
  const links = [
		{ title: 'Submit App', link: 'https://shashwat988522.typeform.com/to/vUK59PFC' },
		{ title: 'Twitter', link: 'https://twitter.com/testflight_live' },
		{ title: 'Contact', link: 'mailto:testflightlive@gmail.com'}
	]

  return (
    <ul class='md:w-1/5'>
      {links.map(({ link, title }, index) => <li class='list'><a href={link}key={index}>{title}</a></li>)}
    </ul>
  )
}

const Categories = ({ categories }) => (
  <ul class='flex flex-wrap md:w-4/5'>
    {categories.map(category => (
      <li class='w-full md:w-1/3'>
        <a href={`/category/${category.name}`}>{category.name}</a>
      </li>
    ))}
  </ul>
)

export default Footer