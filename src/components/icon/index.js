import BaseLogo from '@/assets/icons/base-logo.svg'

const icons = { BaseLogo }

const Icon = ({ icon, ...props }) => {
  const Tag = icons[icon]
  return <Tag {...props} />
}

export default Icon