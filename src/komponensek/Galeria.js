import React from "react";
import Kep from "./Kep";
import './galeria.css';

const KEPEK = [{
    "kep": "https://images.unsplash.com/photo-1634096384757-c034cf28be3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1634095925899-247a9d209ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1633369668789-b5a18595a5a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1629882921753-c58b56a37947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1633122117096-d7aa3f93a1c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1098&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1607274134639-043342705e6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1575362247640-3c7f5079818d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1467811884194-ae868cd3f090?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1608477084172-25d5290b9d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1567178395999-eaeb304311b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1473603477862-9d352d4615e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1436902799100-7eb776a61f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1522149537340-1ec572853077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1511970205999-fab10035354d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1531338410663-88d33379ba03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1433351120803-a29aeee7d1e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1480554840075-72cbdabbf689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1472568595090-2332061325c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1453473552141-5eb1510d09e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1220&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1473221902860-45c5abc981a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1435186376919-88c211714029?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1442155701645-79487c6fa95f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1480321182142-e77f14b9aa64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1469430545866-d718a1cea5ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1523471365024-cdfa3f6c7416?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1524698851750-e97a34a8511b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1534804769946-7825967d435e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
},
{
    "kep": "https://images.unsplash.com/photo-1507390012655-7854c88c1d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1243&q=80"
}
]
;
class Galeria extends React.Component{
    constructor(){
        super();
        this.state = {
            kepek:KEPEK,
        }
        this.state.nagykep = this.state.kepek[0].kep;
        this.state.aktualis = 0;
       
    }

    kattintas=(index)=>{
        
        this.setState({
            nagykep:this.state.kepek[index].kep,
            aktualis:index
        });
        this.szinez(index);
    }

    jobbra=()=>{
        let index= 0;
        if(this.state.aktualis==this.state.kepek.length-1){
            this.kattintas(index);
        }
        else{
            index = this.state.aktualis+1;
            this.kattintas(index);
        }
    }

    balra=()=>{
        let index= this.state.kepek.length-1;
        if(this.state.aktualis!=0){
            index = this.state.aktualis-1;
            this.kattintas(index);
        }
        else{
            this.kattintas(index);
        }

    }

    szinez = (kep)=>{
        let a = ".kep"+kep;
        document.querySelectorAll(".a").forEach(kep => { kep.style.filter = "grayscale(100%)" });
        document.querySelectorAll(".a").forEach(kep => { kep.style.border = "none" });
        document.querySelector(a).style.filter = "unset";
        document.querySelector(a).style.border = "2px solid white";
    }

    render(){
        return (<div className="main">
            <article className="container">
            {KEPEK.map((elem,index)=>{
              
                return <Kep nagyit={this.kattintas} kep={elem.kep} key={index} alt={index} id={index} />
            })}
            </article>
            <div className="kezelo">
            <button onClick={this.balra}>{"< prev"}</button>
            <button onClick={this.jobbra}>{"next >"}</button>
            </div>
            <aside>
                <img src={this.state.nagykep}></img>
            </aside>
            
            
        </div>)
    }

}
export default Galeria;