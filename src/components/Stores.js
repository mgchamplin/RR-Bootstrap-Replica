import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Stores() {
    return(
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in San Jose, CA</h2>
            <Container style={{ marginTop: "50px"}}>
                <div style={{borderBottom: "1px solid #E8E9EB"}} className="d-flex flex-row justify-content-evenly mb-3">
                    <div className="d-flex flex-row mb-3">
                        <div><Image style={{ height: "55px", width: "50px", border: "none" }} src="SafewayLogo.jpg" roundedCircle /></div>
                        <Col style={{ marginLeft:"10px" }}>
                            <h5 style={{ fontWeight: "bold" }}>Safeway</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </div>

                    <div className="d-flex flex-row mb-3">
                        <div><Image style={{ height: "50px", width: "60px", border: "1px solid #E8E9EB" }} src="CostcoLogo.jpg" roundedCircle /></div>
                        <Col style={{ marginLeft:"10px" }}>
                            <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </div>

                    <div className="d-flex flex-row mb-3">
                        <div><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="LuckyLogo.jpg" roundedCircle /></div>
                        <Col style={{ marginLeft:"10px" }}>
                            
                            <h5 style={{ fontWeight: "bold" }}>Lucky's</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </div>
                </div>

                <div style={{borderBottom: "1px solid #E8E9EB"}} className="d-flex flex-row justify-content-evenly mb-3">
                    <div className="d-flex flex-row mb-3">
                        <div><Image style={{ height: "55px", width: "50px", border: "none" }} src="WalmartLogo.jpg" roundedCircle /></div>
                        <Col style={{ marginLeft:"10px" }}>
                            <h5 style={{ fontWeight: "bold" }}>Walmart</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </div>

                    <div className="d-flex flex-row mb-3">
                        <div><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle /></div>
                        <Col style={{ marginLeft:"10px" }}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </div>

                    <div className="d-flex flex-row mb-3">
                        <div><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle /></div>
                        <Col style={{ marginLeft:"10px" }}>
                            
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </div>
                </div>
                
            </Container>
        </div >
    )
}