import React, { Component } from 'react';
import './style.css'
class NomPreCin extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
        this.refName=React.createRef();
        this.refPrenom=React.createRef();
        this.refCin=React.createRef();
        this.refHomme=React.createRef();
        this.refFemme=React.createRef();
        this.refMarie=React.createRef();
    }
    saveData=()=>{
        const d = {
            refName:this.refName.current.value,
            refPrenom:this.refPrenom.current.value,
            refCin:this.refCin.current.value,
            refHomme:this.refHomme.current.checked? 'homme':'',
            refFemme:this.refFemme.current.checked? 'femme':'',
            refMarie:this.refMarie.current.checked ? "Yes":"No"
        }
        this.setState({
            data:[...this.state.data,d]
        })
        this.refName.current.value ='';
        this.refPrenom.current.value ='';
        this.refCin.current.value ='';
        this.refHomme.current.checked= false;
        this.refFemme.current.checked= false;
        this.refMarie.current.checked= false;
    }
    
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Nom</label>
                        <input type='text' ref={this.refName} />
                    </div>
                    <div>
                        <label>Prenom</label>
                        <input type='text'ref={this.refPrenom} />
                    </div>
                    <div>
                        <label>Cin</label>
                        <input type='text' ref={this.refCin}/>
                    </div>
                    <div>
                        <label>Sex</label>
                        <input type='radio' name='sex' value='homme'ref={this.refHomme} />Homme
                        <input type='radio' name='sex' value='femme' ref={this.refFemme}/>Femme
                    </div>
                    <div>
                        <label>Marié </label>
                        <input type='checkbox' name='reponse' value='yes' ref={this.refMarie}/> Yes
                    </div>
                    <div>
                        <input type='button' value='save' onClick={this.saveData}/>
                        <input type='reset' value='Cancel'/>
                    </div>
                </form>
                {this.state.data.length!==0&&
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Prenom</th>
                            <th>Cin</th>
                            <th>Sex</th>
                            <th>Marié</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((v,i)=>{
                            return <tr key={i}>
                                <td>{v.refName}</td>
                                <td>{v.refPrenom}</td>
                                <td>{v.refCin}</td>
                                <td>{v.refHomme || v.refFemme}</td>
                                <td>{v.refMarie}</td>
                                <td><input type='button' value='delete'style={{backgroundColor:'red'}} onClick={this.deleteData}/><input type='button' value='edite'style={{backgroundColor:'green'}} onClick={this.editData}/></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                }
            </div>

        );
    }
    editData=()=>{

    }

    deleteData=(i)=>{
        let oldData=[...this.state.data]
        oldData.splice(i,1)
        this.setState({
            data:oldData
        })
    }
}

export default NomPreCin;