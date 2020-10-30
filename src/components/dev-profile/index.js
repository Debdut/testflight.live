import AvatarIcon from '@/assets/icons/avatar.svg'

const DeveloperProfile = ({ dev }) => dev ? (
  <div class='highlight md:flex text-center md:text-left rounded-xl overflow-hidden'>
    <Avatar avatar={dev.avatars} />
    <div class='py-2 pb-10 md:px-0 md:pt-16 md:pr-10'>
      <h6>{dev.name}</h6>
      <p>{dev.bio}</p>
      <div class='space-x-2'>
        {dev.website ? <a href={dev.website}>Website</a>: null}
        {dev.twitter ? <a href={dev.twitter}>Twitter</a>: null}
      </div>
    </div>
  </div>
) : null

const Avatar = ({ avatar }) => {
  if (avatar) {
    if (Array.isArray(avatar)) {
      if (avatar.length > 0) {
        return (
          <div class='w-32 m-12'>
            <img class='mx-auto rounded-full' src={avatar[0].url} alt='Developer Avatar' />
          </div>
        )
      }
    }
  }

  return (
    <div class='m-12 w-32'>
      <img src={AvatarIcon} alt='Developer Avatar' />
    </div>
  )
}

export default DeveloperProfile