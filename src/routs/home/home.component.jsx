import React from "react";

import MenuItem from '../../components/menu-item/menu-item.component';
// import milk from '../../components/assets/img/milk.jpg';
// import rayeb from '../../components/assets/img/rayeb-850.jpg';
// import yogurt from '../../components/assets/img/tot-yogurt.jpg';
// import samna from '../../components/assets/img/samna.jpg';
// import juice from '../../components/assets/img/JuiceCover.png';
// import iceCream from '../../components/assets/img/ice-cream.jpeg';

const Home = () =>{
    const categories = [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          },
          {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          },
          {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          },
          {
            id: 4,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          },
          {
            id: 5,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          },
    ]       
        return(
            <div className="row mt-5">
                {
                    categories.map(({title, id, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
}

export default Home;