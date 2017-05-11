import Header from './header'
import Footer from './footer'
import Head from './head'

const Page = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

Page.Head = Head

export default Page