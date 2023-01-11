import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';

class MyFormTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { valueFromInputs, onChildHide } = this.props;
        let objFromValueFromInputs = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            hidden: true
        };

        if (valueFromInputs !== undefined) {
            objFromValueFromInputs = Object.fromEntries(valueFromInputs);
        }

        return (
            <div className={cn("form-table", {hidden: objFromValueFromInputs.hidden})}>
                <button onClick={onChildHide}
                        type="button" className="btn btn-primary">Back</button>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>accept rules</td>
                        <td>{objFromValueFromInputs.acceptRules}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{objFromValueFromInputs.address}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{objFromValueFromInputs.city}</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>{objFromValueFromInputs.country}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{objFromValueFromInputs.email}</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>{objFromValueFromInputs.password}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

MyFormTable.propTypes = {
    valueFromInputs: PropTypes.array
}

export default MyFormTable;