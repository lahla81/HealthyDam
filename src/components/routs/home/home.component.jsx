import React from "react";

import MenuItem from '../../menu-item/menu-item.component';
import milk from '../../assets/img/milk.jpg';
import rayeb from '../../assets/img/rayeb-850.jpg';
import yogurt from '../../assets/img/tot-yogurt.jpg';
import samna from '../../assets/img/samna.jpg';
import juice from '../../assets/img/JuiceCover.png';
import iceCream from '../../assets/img/ice-cream.jpeg';

const Home = () =>{
    const categories = [
        {
            title: 'الحليب',
            imageUrl: milk,
            id: 1,
            size: 'large'
        },
        {
            title: 'الرايب',
            imageUrl:rayeb,
            id: 2,
            size: 'large'
        },
        {
            title: 'الزبادي',
            imageUrl:yogurt,
            id: 3,
            size: 'large'
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
        return(
            <div className="directory-menu">
                {
                    categories.map(({title, id, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
}

export default Home;