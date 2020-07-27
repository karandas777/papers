import React, { Component } from 'react';
import {fireDatabase} from '../firebase';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            wallList:[],
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetAllWalls();
    }

    funGetAllWalls = () => {
        fireDatabase.child('imageList').on('value',(snapshot)=>{
            let list = [];
            for(let wall in snapshot.val()){
                let obj = {
                    id : wall,
                    title : snapshot.val()[wall].title,
                    image : snapshot.val()[wall].image,
                }
                list.push(obj);
            }
            this.setState({wallList:list.reverse()})
        })
    }
    

    render() {
        return (
            <div className="container my-4 py-5 pt-3 px-1">
                <div className="my-4 text-center">New wallpapers <span className="text-primary">every hour!</span></div>
                {
                    this.state.wallList.length === 0  ? (
                        <div className="my-3 text-center">
                        <img src={require('../assets/loader.gif')} className="col-6 w-100" alt="loading" />
                    </div>
                    ) : null
                }

                <div className="row m-0 p-0">
                    {
                        this.state.wallList && this.state.wallList.map((wall)=>(
                            <div className="col-3 m-0 p-1" key={wall.id}>
                                <a href={wall.image} download data-toggle="tooltip" data-placement="top" title={wall.title}>
                                <img src={wall.image} className="w-100 img-fluid rounded shadow-sm" alt={wall.title} />
                                </a>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }
}
