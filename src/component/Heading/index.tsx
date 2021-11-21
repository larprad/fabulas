type Props = {
  title: string
}

const Heading = ({ title }: Props): JSX.Element => {
  return <h2 className="text-xl font-bold text-center pt-3 pb-6">{title}</h2>
}

export default Heading
