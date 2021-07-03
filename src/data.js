import photo1 from "./assets/images/header-img-pottery.jpg"
import photo3 from "./assets/images/header-img-barista.jpg"
import photo2 from "./assets/images/header-img-gardener.jpg"
import pin1 from "./assets/icons/pin-01.svg";
import pin2 from "./assets/icons/pin-02.svg";


 const cards = [
    {
      title: 'Project',
      url: photo1,
      desc: 'Pottery in Bangtok'
    },
    {
      title: 'GardenThumb',
      url: photo2,
      desc: 'Gardener in CheChe'
    },
    {
      title: 'Green Cafe',
      url: photo3,
      desc: 'Cafe in Bangtok'
    }
  ]
  const pins = [
    {
      url: pin1,
      alt: "icon"
    },
    {
      url: pin2,
      alt: "icon"
    }
  ]
  export {cards, pins}