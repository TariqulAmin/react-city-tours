import React, { Component } from 'react'
import './Tour.scss'
export class Tour extends Component {

    state={
        showInfo:false
    }

    toggleText =() =>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    remove =  () =>{
        this.props.removeTour(this.props.tour.id);
    }

    render() {

        const {city,img,name,info} = this.props.tour
        return (
            <article className="tour">
                <div className="image-container">
                    <img src={img} alt=""/>
                    <span className="close-btn" onClick={this.remove}>
                      <i className="fa fa-window-close"></i> 
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info <span onClick={this.toggleText}><i className="fa fa-caret-square-down"></i></span></h5>
                    { this.state.showInfo && <p>{info}</p> }
                </div>
            </article>
        )
    }
}

export default Tour
