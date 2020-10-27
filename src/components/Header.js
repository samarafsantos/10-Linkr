import React from 'react'
import {BsChevronDown} from 'react-icons/bs';

import {HeaderContainer} from '../styles/timeline'

export default function Header() {
    

    return (
        <HeaderContainer>
            <h1>linkr</h1>
            <div>
                <BsChevronDown/>
                <img src="https://i.ytimg.com/vi/UuyABRgD7J0/maxresdefault.jpg"/>
            </div>
        </HeaderContainer>
    )
}