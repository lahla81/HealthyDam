import React from "react";

import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import milk from '../assets/img/milk.jpg';
import rayeb from '../assets/img/rayeb-850.jpg';
import yogurt from '../assets/img/tot-yogurt.jpg';
import samna from '../assets/img/samna.jpg';
import juice from '../assets/img/JuiceCover.png';
import iceCream from '../assets/img/ice-cream.jpeg';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'الحليب',
                    imageUrl: milk,
                    id: 1,
                    size: 'small'
                },
                {
                    title: 'الرايب',
                    imageUrl:rayeb,
                    id: 2,
                    size: 'small'
                },
                {
                    title: 'الزبادي',
                    imageUrl:yogurt,
                    id: 3,
                    size: 'small'
                },
                {
                    title: 'السمن',
                    imageUrl:samna,
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'العصائر',
                    imageUrl:juice,
                    id: 5,
                    size: 'large'
                },
                {
                    title: 'الايس كريم',
                    imageUrl:iceCream,
                    id: 6,
                    size: 'large'
                },
            ]   
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;