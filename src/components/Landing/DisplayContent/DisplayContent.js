import React from 'react'
import PropTypes from 'prop-types'
import images from '../../../images/index'
import { GetLadybugs } from '../../Utils/getLadybugs'

export const DisplayContent = (props) => {

    const names = props.names
    const imageLocations = props.imageLocations

    var outputJSX = [];

    if (names.length !== 0 && imageLocations.length !== 0) {
        outputJSX.push(
            <><>
                <h1>{names[2]}</h1>
                <img src={imageLocations[2]} alt=""></img>
            </>
            <div>{ GetLadybugs } </div></>
        );
    }

    return outputJSX;

}

DisplayContent.propTypes = {
    names: PropTypes.array,
    imageLocations: PropTypes.array,
}
