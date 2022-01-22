import { Provider } from './Tailor'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../../../layouts/${layout}`).default

  return (
    <Provider>
      <Layout {...rest} />
    </Provider>
  )
}

export default Wrapper
