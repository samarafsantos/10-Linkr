
import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

export default function Timeline() {

    const data = useContext(UserContext);
    const { userInfo } = data;
}