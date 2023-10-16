import { Component } from "react";
import'./style/SeeMoreStyle.css'
import wristWatch1 from '../images/wristWatch1.jpg'
import wristWatch2 from '../images/wristWatch2.jpg'
import wristWatch3 from '../images/wristWatch3.jpg'
import wristWatch4 from '../images/wristWatch4.jpg'
import wristWatch5 from '../images/wristWatch5.jpg'
import wristWatch6 from '../images/wristWatch6.jpg'
import wristWatch7 from '../images/wristWatch7.jpg'
import wristWatch8 from '../images/wristWatch8.jpg'
import { Link } from 'react-router-dom'
class SeeMore extends Component{
    constructor(props){
        super(props);
        this.state={
            wristWatch:[
                {id:1,img:wristWatch1,price:6750.36,name:'Mens Gc Chronograph Watch'},
                {id:2,img:wristWatch2,price:5940.31,name:'Mens Gc Chronograph Watch'},
                {id:3,img:wristWatch3,price:6210.33,name:'Mens Gc IronClass Watch Z32002G9MF'},
                {id:4,img:wristWatch4,price:6210.33,name:'Mens Gc IronClass Watch Z32004G1MF'},
                {id:5,img:wristWatch5,price:3564.19,name:'Ladies Gc LadyChain Watch'},
                {id:6,img:wristWatch6,price:5670.30,name:'Ladies Gc Vogue Watch Z21011L1MF'},
                {id:7,img:wristWatch7,price:3186.17,name:'Ladies Gc  Muse Watch'},
                {id:8,img:wristWatch8,price:6750.36,name:'Ladies Gc Flair Crystal Watch Z01014L1MF'},
            ]
        }
    }
    render(){
        return(
            <div>
                <body className="seemore-body">
                     {this.state.wristWatch.map((watch)=>{
                    return <div key={watch.id} className="seemore-item">
                        <img src={watch.img} alt={watch.name}/>
                        <p>{watch.name}</p>
                        <p>{watch.price} DH</p>
                        <Link to='/buy' className="link-buy">BUY</Link>    
                    </div>
                    
                })}
                </body>
               
            </div>
        );
    }
}
export default SeeMore;