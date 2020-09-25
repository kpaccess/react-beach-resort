import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from "../context";
import Loading from "./Loading";

const RoomContainer = ({context}) => {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading/>;
    }
    return (
        <>
            rooms container
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
};

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
//
//
// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     console.log(" value ", value);
//                     const { loading, sortedRooms, rooms } = value;
//
//                     if(loading) {
//                         return <Loading />;
//                     }
//
//                     return (
//                         <div>
//                             rooms container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//
//         </RoomConsumer>
//
//     );
// };
//
// export default RoomContainer;