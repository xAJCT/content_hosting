import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../src/img/SCPLogo.svg';

function BrandExample()
{
    return (
        <>
            <Navbar className="bg-danger bg-gradient bg-opacity-50 mb-4">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" />{''}
                        SCP Foundation
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;