import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as dotenv from 'dotenv'
dotenv.config()

import StackRoutes from './stack.routes'

const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes
