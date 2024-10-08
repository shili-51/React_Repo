Context provides a way to pass data through the component tree without having to pass props down manually at every level.


                            AppComponent -> from App component we need to pass username as prop to children components
                                                                 |
                                                                 |
                                                                 |
                                                                 |
---------------------------------------------------------------------------------------------------------------------
|                                                    |                                                              |
|  username                                          | username                                                     | username
A                                                    B                                                              C
                                                     | username                                                     | username
                                                     |                                                              |
                                                     D                                                              E
                                                                                                                    | username
                                                                                                                    |
                                                                                                                    F

In above tree diagram if we need to pass prop (username to A, D, F) components, we will pass prop to A directly, then to pass it to D, we need to pass this first to B and then
B will pass that to D similarly for F.
So to avoid this that only the components which require the prop only those get that prop passed directly from app component, we use Context.

How to create Context - 
1. Create the context.
2. Provide a context value.
3. Consume the context value.

Every context object created using create context method comes with a provider and a consumer react component. We need those components for step 2 and step 3, which means we have 
to export them.

Codes - 
############################################################################ Creating User Context ################################################################

import React from "react";

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

###################################################################################### Providing Context value in App.js ##############################################
<UserProvider value="Shilpy">
          <ComponentC />
        </UserProvider>
        
        
################################################################################### Consuming created Context value in Component F ##################################
import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            // UserConsumer tells component that hey you need prop from app.js
            // let me help you
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF

We can set default value to the context. Default value is set while creating the context, it is passed as an arguement in createContext method.

        
