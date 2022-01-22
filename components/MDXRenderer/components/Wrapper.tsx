const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../../../layouts/${layout}`).default
  return <Layout {...rest} />
}

export default Wrapper
