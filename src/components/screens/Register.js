import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';

import RegistrationForm from '../forms/RegistrationForm';

const Register = () => {
    return (
        <Container className="home-container d-flex align-items-center justify-content-between" fluid>
            <Row style={{ flex: 1, marginTop: "-10em" }}>
                <Col md={{ size: "4", offset: "4" }}>
                    <Card>
                        <CardBody>
                            <Container fluid>
                                <Row className="mb-4">
                                    <RegistrationForm />
                                </Row>
                                <Row>
                                    <Button color="link" onClick={() => this.props.navigateTo("/login")}>Login</Button>
                                </Row>
                            </Container>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigateTo: (route) => {
            dispatch(push(route));
        }
    }
}

export default connect(null, mapDispatchToProps)(Register);