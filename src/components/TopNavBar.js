import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button"

export default function TopNavBar() {
    return (
        <div >
            <Navbar bg="light" expand="lg" style={{ display: "flex"}}>
                <Navbar.Brand style={{margin: "20px 0 0 20px"}} href="#home"><
                    img src="./InstacartLogo.jpg" /> 
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav style={{marginLeft: "1170px", padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} >
                        <Nav.Link style={{color: "black"}}>Log In</Nav.Link>
                            <Button variant="success" style={{backgroundColor:"green", borderRadius:"100px", marginLeft: "80px", fontSize: "16px"}}>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

