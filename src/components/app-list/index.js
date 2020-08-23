const AppList = ({ apps, title }) => (
  <>
    <h2 class='my-6'>{title}</h2>
    <ul class='bg-white px-4 rounded-lg'>
      {apps.map((app, index) => <App app={app} key={index} />)}
    </ul>
  </>
)

const App = ({ app: { name, logo, short, category, id, upvotes } }) => (
	<li class='border-b flex p-4 px-2'>
		<img class='h-16 rounded-lg' src={logo} alt='app logo' />
		<div class='pl-6 w-full'>
			<div class='float-right mt-4'>
				<i class='far fa-star text-2xl text-gray-700'></i>
				<p class='ml-1'>{upvotes}</p>
			</div>
			<a class='font-semibold text-lg' href={`/app/${id}`}>{name}</a>
			<p>{short}</p>
			<span class='bg-teal-200 text-teal-800 font-bold px-1 rounded'>{category}</span>
		</div>
	</li>
)

export default AppList