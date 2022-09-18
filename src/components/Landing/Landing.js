import React from 'react'

import { GetLadybugs } from '../Utils/getLadybugs'
import { DisplayContent } from './DisplayContent/DisplayContent'

export const Landing = () => {

    GetLadybugs(gotDataCallback)

    function gotDataCallback (data) {
        //console.log(data)
        const obj = JSON.parse(data)
        
        const {name, imageLocations, description } = obj
        // console.log(name)
        // console.log(imageLocations)
        // console.log(description)
    }

    return (
        <>
            <h1>Landing Page</h1>

            <DisplayContent

                names={obj.name}
                imageLocation={obj.imageLocations}  
                // names={["Ladybug1", "Ladybug2", "Ladybug3"]}
                // imageLocations={[
                //     "Coccinella.jpg",
                //     "image2.jpg",
                //     "image3.jpg",
                // ]}
            
            />
        </>
    );
}