import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DueList from "../../components/DueList";
import DueItem from "../../components/DueItem";

class Signup extends Component {
    state = {
        category: this.props.categoryName,
        dues: []
    };

    // componentDidMount() => {
    //   this.getDues(this.state.category);
    // }

    // loadDues = () => {
    //     API.getDues(this.state.category)
    //         .then(res =>
    //             this.setState({ dues: res.dues })
    //         )
    //         .catch(err => console.log(err));
    // };
    //
    // handleInputChange = event => {
    //     const { name , value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    //
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.createDue(this.state.category, {
    //         description: this.state.description,
    //         amount: this.state.amount
    //     })
    //         .then(res => this.getDues())
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.description && this.state.amount)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                            </FormBtn>
                        </form>
                        {/*{this.state.dues.length ? (*/}
                            {/*<DueList>*/}
                                {/*{this.state.dues.map(due => (*/}
                                    {/*<DueItem description={due.description} amount={due.amount} key={due._id}/>*/}
                                {/*))}*/}
                            {/*</DueList>*/}
                        {/*) : (*/}
                            {/*<h3>No Dues to Display</h3>*/}
                        {/*)}*/}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;