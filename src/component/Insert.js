import React, { Component } from 'react';
import {fireDatabase , fireStorage} from '../firebase';

export default class Insert extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             image:"",
             selectedFile:"",
             valid:false,
        }
    }


    funHandleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    funHandleFile = (e) => {
        this.setState({selectedFile:e.target.files[0]});
    }

    funUploadImage = () => {
        // console.log(this.state.selectedFile)
        const newImage = fireStorage.child(this.state.selectedFile.name);
        newImage.put(this.state.selectedFile)
        .then((snapshot)=>{
            newImage.getDownloadURL().then((url)=>{
                this.setState({image:url, valid:true})
            })
        })
    }
    
    funInsert = () => {
        const imagelist = fireDatabase.child('imageList');
        imagelist.push({title:this.state.title,image:this.state.image} , err=>{
            if (err){
                console.log(err)
            }
        })
        .then(()=>{
            this.setState({
            title:"",
             image:"",
             selectedFile:"",
             valid:false,
            })
        })
    }

    render() {
        // console.log(this.state);
        return (
            <div className="container my-4">
                <div className="col-md-6 p-3 mx-auto">
                    <div className="h4 text-center mb-3">Insert Image</div>
                    <div className="p-3 bg-light rounded shadow-sm">
                        <div>Title</div>
                        <input type="text" name="title" value={this.state.title} onChange={this.funHandleChange} className="form-control my-3" />
                        <div>Image</div>
                        <input type="file" className="form-control my-3 p-1" onChange={this.funHandleFile} />
                        <button className="btn btn-warning" onClick={this.funUploadImage}><i className="fa fa-arrow-up"></i></button>
                          
                        <div></div>
                        {
                            this.state.valid ? (<button className="btn btn-warning mt-3 shadow-sm" onClick={this.funInsert}>Upload</button>) : null
                        }
                    </div>
                </div> 
            </div>
        )
    }
}
