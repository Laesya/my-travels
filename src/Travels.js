import React from "react";
import Travel from './Travel';


const TravelsArray = [
    {
      destination : 'Paris',
      country : 'France',
      img : 'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/07/inspiration-voyage.jpg',
      distance : ' 775km'
    },
    {
      destination : 'Toulouse',
      country : 'France',
      img : 'https://www.toulouse-tourisme.com/sites/www.toulouse-tourisme.com/files/styles/incontournable_hp/public/thumbnails/image/incontournables_0.jpg?itok=hOLqvKSw',
      distance : '403km'
    },
    {
      destination : 'Marseille',
      country : 'France',
      img : 'https://img.bfmtv.com/c/1200/500/f27/e777315fb676345071bbdf5281db6.jpg',
      distance : '0km'
    },
    {
      destination : 'Dijon',
      country : 'France',
      img : 'http://up-magazine.info/images/0418/dijon-generique1.jpg',
      distance : '505km'
    },
    {
      destination : 'Brest',
      country : 'France',
      img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ch%C3%A2teau_et_Tour_Tanguy.jpg/1200px-Ch%C3%A2teau_et_Tour_Tanguy.jpg',
      distance : '1283km'
    }
  ];

const Travels = () => (
    <div>
        {TravelsArray.map(travel => (
            <Travel destination={travel.destination} country={travel.country} img={travel.img} distance={travel.distance} />
        ))}
    </div>
);

export default Travels;