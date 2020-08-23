import BaseLogo from '@/assets/icons/base-logo.svg'
import Search from '@/assets/icons/search.svg'

const icons = { BaseLogo, Search }

const Icon = ({ icon, ...props }) => {
  const Tag = icons[icon]
  return <Tag {...props} />
}

export default Icon