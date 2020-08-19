import React from 'react'

export default function GalleryListItem(props) {

console.log(props);
    return (
    <li data-target="#myCarousel" data-slide-to="1"><button type="button" className="btn btn-secondary btn-sm" onClick={ () => {props.projectUpdateState({currentId: props.id})}}>{props.id + 1}</button></li>
    )
}