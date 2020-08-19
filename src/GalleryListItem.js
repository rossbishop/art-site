import React from 'react'

export default function GalleryListItem(props) {

console.log(props);
    return (
    <li data-target="#myCarousel" data-slide-to="1" className={((props.isLatest-1)==props.id) ? "active" : ""}><button type="button" className={((props.isLatest-1)==props.id) ? "btn btn-info btn-sm" : "btn btn-secondary btn-sm"} onClick={ () => {props.projectUpdateState({currentId: props.id})}}>{props.id + 1}</button></li>
    )
}