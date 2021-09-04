import React, { Component } from 'react'
import ChefService from '../services/ChefService'

class ViewChefComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chefid: this.props.match.params.chefid,
            chef: {}
        }
    }

    componentDidMount(){
        ChefService.getChefById(this.state.chefid).then( res => {
            this.setState({chef: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Chef Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Chef First Name: </label>
                            <div> { this.state.chef.firstname }</div>
                        </div>
                        <div className = "row">
                            <label> Chef Last Name: </label>
                            <div> { this.state.chef.lastname }</div>
                        </div>
                        {/* <div className = "row">
                            <label> Chef Gender: </label>
                            <div> { this.state.chef.gender }</div>
                        </div> */}
                        <div className = "row">
                            <label> Chef Address: </label>
                            <div> { this.state.chef.address }</div>
                        </div>
                        <div className = "row">
                            <label> Chef City: </label>
                            <div> { this.state.chef.city }</div>
                        </div>
                        <div className = "row">
                            <label> Chef Contact Number: </label>
                            <div> { this.state.chef.contactnumber }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewChefComponent