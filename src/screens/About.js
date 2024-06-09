import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import './About.css';

export default function About() {
    return (
        <div>
            <Navbar />
            <Container className='my-5'>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Card className='shadow-lg p-3 mb-5 bg-white rounded'>
                            <Card.Body>
                                <Card.Title as="h1" className='text-center mb-4 about-title'>About Text Analyzer</Card.Title>
                                <Card.Text className='about-text'>
                                    Hello! My name is Srinivas Sobhit, a B.Tech student at SRM University, Kattankulatur, Chennai.
                                </Card.Text>
                                <Card.Text className='about-text'>
                                    I have created a Text Analyzer project using React.js. This tool allows you to:
                                </Card.Text>
                                <ListGroup variant='flush' className='mb-4 about-list'>
                                    <ListGroup.Item>Convert text to uppercase</ListGroup.Item>
                                    <ListGroup.Item>Convert text to lowercase</ListGroup.Item>
                                    <ListGroup.Item>Calculate the number of words and characters</ListGroup.Item>
                                    <ListGroup.Item>Estimate the approximate reading time</ListGroup.Item>
                                </ListGroup>
                                <Card.Text className='about-text'>
                                    This project has been a significant step in my journey as a developer. It has been both challenging and rewarding, and I am committed to improving my skills by developing more projects like this.
                                </Card.Text>
                                <Card.Text className='about-text'>
                                    Thank you for using the Text Analyzer! Your feedback and suggestions are greatly appreciated.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
