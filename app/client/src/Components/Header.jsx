import { Navbar, NavbarBrand } from 'reactstrap'
import logo from '../logo.svg'

const Header = () => {
  return (
    <Navbar color="dark" dark>
        <NavbarBrand style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <img
                src={logo}
                className="App-logo"
                alt="logo"
                style={{
                    height: 40,
                    width: 40
                }}
            />
            Real Estate Housing Predictor
        </NavbarBrand>
        <a href="https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data" target="_blank" rel="noreferrer">Dataset</a>
        <a href='https://github.com/RajatShah03/real-estate-prediction' target="_blank" rel="noreferrer">Github</a>
    </Navbar>
  )
}

export default Header