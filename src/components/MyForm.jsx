import React from "react";
import MyFormTable from "./MyFormTable";


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            hidden: true
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        let value = '';

        if (target.type === 'checkbox') {
            value = target.checked;
        } else {
            value = target.value;
        }

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            valueFromInputs: Object.entries(this.state),
            hidden: false
        });
    }

    handleChildHide = (event) => {
        event.preventDefault();
        this.setState({
            valueFromInputs: undefined,
            hidden: true
        });
    }

    render() {
        const valueFromInputs = this.state.valueFromInputs;

        return (
            <div>
                <form onSubmit={this.handleSubmit} name="my-form">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input value={this.state.email}
                               onChange={this.handleInputChange}
                               type="email" name="email" className="form-control" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input value={this.state.password}
                               onChange={this.handleInputChange}
                               type="password" name="password" className="form-control" id="password"
                               placeholder="Password"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea value={this.state.address}
                                  onChange={this.handleInputChange}
                                  type="text" className="form-control" name="address" id="address"
                                  placeholder="1234 Main St"> </textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input value={this.state.city}
                               onChange={this.handleInputChange}
                               type="text" className="form-control" name="city" id="city"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select value={this.state.country} onChange={this.handleInputChange}
                            id="country" name="country" className="form-control">
                            <option>Choose</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="China">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input checked={this.state.acceptRules}
                                       onChange={this.handleInputChange}
                                       name="acceptRules"
                                       type="checkbox"
                                       id="rules"
                                       className="form-check-input"/>
                                Accept Rules
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>

                    <MyFormTable valueFromInputs={valueFromInputs} onChildHide={this.handleChildHide}/>
                </form>
            </div>
        )
    }
}

export default MyForm;