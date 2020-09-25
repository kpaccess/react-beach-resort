import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    componentDidMount() {
    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log("room ", room)
        if(!room) {
            return (<div className="error">
            <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>)
        }


        const { breakfast, capacity, description, extras, id, name, price, size, images, pets } = room;

        const [ mainImg, ...defaultImg ]= images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg} hero="roomsHero">
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room" sx={{border: "1px red solid"}}>
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return (
                                <img key={index} src={item} alt={name} />
                            )
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>max capacity : { capacity > 1 ? `${capacity} people`:`${capacity} person`}</h6>
                            <h6>{ pets ? "pets allowed": "no pets allowed"}</h6>
                            <h6>{breakfast && "freed breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>

        );
    }
};

export default SingleRoom;