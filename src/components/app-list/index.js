const AppList = ({ apps, title }) => (
  <>
    <h2 class='my-6'>{title}</h2>
    <ul class='highlight box-shadow px-4 rounded-lg'>
      {apps.map((app, index) => <App app={app} key={index} />)}
    </ul>
  </>
)

const App = ({ app: { name, icons, short, categories, id } }) => (
	<li class='list flex p-4 px-2'>
		<img class='h-16 rounded-lg' src={icons[0].url} alt='app logo' />
		<div class='pl-6 w-full'>
			{/* <div class='float-right mt-4'>
				<i class='far fa-star text-2xl' />
				<p class='ml-1'>{upvotes}</p>
			</div> */}
			<a class='font-semibold text-lg' href={`/app/${id}`}>{name}</a>
			<p>{short}</p>
			<p class='font-bold'>{categories}</p>
		</div>
	</li>
)

export default AppList