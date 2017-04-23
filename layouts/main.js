import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
export default ({ children, title = 'Ouracademy' }) => (
  <div>
    <Head title={title} />
    <Header />
    {children}
    <Footer />
  </div>
)