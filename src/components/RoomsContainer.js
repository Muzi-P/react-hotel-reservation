import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { withRoomConsumer } from '../context'


function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )

}
export default withRoomConsumer(RoomContainer)



// import { RoomConsumer } from '../context'
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const { loading, sortedRooms, rooms } = value
//                     if (loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             hello from room container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }
