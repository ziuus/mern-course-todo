const Name = (props) => {
  const { name } = props;
  console.log(name);
  return (
    <h1 className="text-xl font-semibold">{name}</h1>
  )
}

export default Name;