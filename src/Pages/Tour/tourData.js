import islamabad from '../../assets/TourAssets/Islamabad.jpg'
import Gilgit from '../../assets/TourAssets/GilgitPic.jpg'
import Swat from '../../assets/TourAssets/SwatPic.jpg'

const tourData = [
    {
        id:'1',
        img: islamabad,
        destination: 'Islamabad',
        featured: false,
        description: 'From Lahore to Islamabad',
        price: 'Rs.4,500',
        stars: '4',
        duration: 'One Day Tour'
    },
    {
        id:'2',
        img: Swat,
        destination: 'Swat',
        featured: true,
        description: 'From Lahore to Swat',
        price: 'Rs.6,500',
        stars: '4',
        duration: 'One Day Tour'
    },
    {
        id:'3',
        img: Gilgit,
        destination: 'Gilgit',
        featured: true,
        description: 'From Lahore to Gilgit',
        price: 'Rs.5,500',
        stars: '4',
        duration: 'One Day Tour'
    },
    {
        id:'4',
        img: Swat,
        destination: 'Hunza Valley',
        featured: false,
        description: 'From Lahore to Hunza',
        price: 'Rs.8,500',
        stars: '3',
        duration: 'One Day Tour'
    }
]

export default tourData