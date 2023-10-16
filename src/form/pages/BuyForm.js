import React, { Component } from "react";
import './style/BuyForm.css'
import { Link } from "react-router-dom";
class BuyForm extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            selectedRate:'Average',
            type:{
                ladiesGc:false,
                menGc:false,
                juniorGc:false,
                allGc:false,
            },
            mailling:""
        }
        this.refFirstName=React.createRef();
        this.refLastName=React.createRef();
        this.refEmailAddress=React.createRef();
        this.refPassword=React.createRef();
        this.refSubscription=React.createRef();
        this.refWantsMost=React.createRef();
        this.refComment=React.createRef();
        this.refRate=React.createRef();
    }
    
    handleWantsMost = (name, event) => {
        this.setState(prevState => ({
            type: {
                ...prevState.type,
                [name]: event.target.checked
            }
        }));
    }

    render(){
        const rateOption=["Terrible", "Bad", "Average", "Good", "Excellent"];
        return(
            <>
            <div className="BuyForm">
                <h1>Before you embrace elegance, let's capture your details.</h1>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" ref={this.refFirstName}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" ref={this.refLastName}/>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="email" ref={this.refEmailAddress}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" ref={this.refPassword}/>
                    </div>
                    <div>
                        <label>Repeat Password</label>
                        <input type="password"/>
                    </div>
                    <div>
                        <label>Choose Your Subscription</label>
                        <select ref={this.refSubscription}>
                            <option>Elite Subscription</option>
                            <option>Advanced Subscription</option>
                            <option>Basic Subscription</option>
                        </select>
                    </div>
                    <div>
                        <label>What You Want To See Most ?</label>
                        <input type="checkbox"  name="type" value="ladiesGc" onChange={(e) => this.handleWantsMost("ladiesGc", e)} />Ladies Gc
                        <input type="checkbox"  name="type" value="menGc" onChange={(e) => this.handleWantsMost("menGc", e)}/>Men Gc
                        <input type="checkbox"  name="type" value="juniorGc" onChange={(e) => this.handleWantsMost("juniorGc", e)}  />Junior Gc
                        <input type="checkbox"  name="type" value="allGc" onChange={(e) => this.handleWantsMost("allGc", e)} />All Gc
                    </div>
                    <div>
                        <label>Join our mailing list ?</label>
                        <input type="radio" name="join" value="Yes" onChange={this.handleMailingChange} checked={this.state.mailling==='Yes'} /> Yes
                        <input type="radio" name="join" value="No"  onChange={this.handleMailingChange} checked={this.state.mailling==='Yes'}/> No
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea rows={4} cols={30} ref={this.refComment}></textarea>
                    </div>
                    <div>
                        <label>Would you rate our website?</label>
                        <input type="range" min={0} max={5} step={1} ref={this.refRate} onChange={this.handleRate}/>
                        <p>{rateOption[this.state.selectedRate - 1]}</p>
                    </div>
                    <div>
                        <input type="button" value='Save' onClick={this.savedata}/>
                        <input type="reset" value='Cancel'/>
                    </div>
                    <div>
                        <Link to='/home' className="home-button">Go back to Home</Link>
                        <Link to='/seemore' className="stor-button">Go back to Store</Link>
                    </div>
                </form>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email adresse</th>
                        <th>Password</th>
                        <th>Your Subscription</th>
                        <th>You gonna see</th>
                        <th>thanks for </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((value, index)=>{
                        return <tr key={index}>
                            <td>{value.refFirstName}</td>
                            <td>{value.refLastName}</td>
                            <td>{value.refEmailAddress}</td>
                            <td>{value.refPassword}</td>
                            <td>{value.refSubscription}</td>
                            <td>{this.generateYouGonnaSeeText(value)}</td>
                            <td>{value.refRate}/5</td>
                        </tr>
                    })}
                </tbody>
            </table>
            </>
        );
    }
    generateYouGonnaSeeText(data) {
        const selectedItems = [];
    
        if (data.refWantsMost.ladiesGc) {
            selectedItems.push("Ladies Gc");
        }
        if (data.refWantsMost.menGc) {
            selectedItems.push("Men Gc");
        }
        if (data.refWantsMost.juniorGc) {
            selectedItems.push("Junior Gc");
        }
        if (data.refWantsMost.allGc) {
            selectedItems.push("All Gc");
        }
    
        return selectedItems.join(", "); // Combine selected items into a comma-separated string
    }
    
    handleMailingChange=(event)=>{
        this.setState({
            mailling:event.target.value,
        })
    }
    handleRate=(even)=>{
        const rate = even.target.value;
        this.setState({
            selectedRate:rate
        });
    }

    

    savedata=()=>{
        const d = {
            refFirstName:this.refFirstName.current.value,
            refLastName:this.refLastName.current.value,
            refEmailAddress:this.refEmailAddress.current.value,
            refPassword:this.refPassword.current.value,
            refSubscription:this.refSubscription.current.value,
            refWantsMost: this.state.type,
            refComment:this.refComment.current.value,
            refRate:this.refRate.current.value,
            mailling:this.state.mailling
        };
        this.setState({
            data:[...this.state.data,d]
        });
        alert(`Welcome ${this.refFirstName.current.value} ${this.refLastName.current.value}`)
    };
}
export default BuyForm;