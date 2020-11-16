import React from "react";
import Moment from "react-moment";
import './concert-item-style.scss'

const ConcertItem = ({startDate, title, description, address}) =>{

    return(
        <section className="concerts__content" >
            <div className='concerts__date-time'>
                <Moment format="DD" className="concerts__day">{startDate}</Moment>
                <Moment format="MMMM" className="concerts__month">{startDate}</Moment>
                <Moment format="YYYY" className="concerts__year">{startDate}</Moment>

            </div>
            <div className="concerts__information">
                <h3 className="concerts__title">{title}</h3>
                <p className="concerts__description">{description}</p>
                <p className="concerts__address">{address}</p>
                <Moment format="HH:mm" className='concerts__time'>{startDate}</Moment>
            </div>
        </section>
    );
}

export default ConcertItem;