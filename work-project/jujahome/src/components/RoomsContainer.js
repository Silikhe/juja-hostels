import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import {RoomConsumer} from '../context'

export default function RoomsContainer() {
    return (
        <RoomConsumer>

        </RoomConsumer>
        <div>
            Hello from rooms container
            <RoomList/>
            <RoomFilter/>
        </div>
    )
}
