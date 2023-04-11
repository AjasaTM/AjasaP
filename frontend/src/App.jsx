import { Nav, Services, Transaction, Banner, Header, Transactions, Footer } from "./components"

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <div>
        <Header />
        <Banner />
        <Nav />
      </div>
      <Transaction />
      <Transactions />
      <Services />
      <Footer />
    </div>
  )
}

export default App