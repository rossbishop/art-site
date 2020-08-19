import React from 'react'

export default function GalleyListItem(props) {

console.log(props);
    return (
        <li data-target="#myCarousel" data-slide-to="1"><button type="button" className="btn btn-secondary btn-sm" onClick={ () => {updateCurrentProject({currentId: 8}); updateCurrentComments({currentComments: props.projectData[8].comments})}}>9</button></li>
    )
}