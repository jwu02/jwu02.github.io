
const SubSectionTitle = ({ title, icon: Icon }) => {
  return (
    <h2 className="flex gap-2 text-sm font-semibold items-center mb-1">
      <Icon className="icon w-7 h-7" />
      <span className="title">{title}</span>
    </h2>
  )
}

export default SubSectionTitle