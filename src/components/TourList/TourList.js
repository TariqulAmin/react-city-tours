import React, { Component } from 'react'
import './TourList.scss'
import Tour from '.././Tour/Tour'
import {tourData} from './tourData'

export class TourList extends Component {
    state={
        tours:tourData
    }

    removeTour = (id) =>{
       const filteredTour=this.state.tours.filter((tour) =>{
           return tour.id !== id
       } )

      this.setState({
          tours:filteredTour
      })
    }
    render() {
        const {tours}=this.state
        return (
            <section className="tourlist">
                {
                    tours.map((tour)=>{
                        return <Tour  removeTour={this.removeTour} key={tour.id} tour={tour} />
                    })
                }
                
            </section>
        )
    }
}

export default TourList
