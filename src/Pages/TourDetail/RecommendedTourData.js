import islamabad from '../../assets/TourAssets/Islamabad.jpg'
import Gilgit from '../../assets/TourAssets/GilgitPic.jpg'
import Swat from '../../assets/TourAssets/SwatPic.jpg'

const recommendTours = [
    { 
        id:'1',
        agencyName: 'Islamabad Travels',
        img: islamabad,
        destination: 'Islamabad',
        featured: false,
        description: 'From Lahore to Islamabad',
        price: 'Rs.4,500',
        stars: 4,
        duration: '1 Day Tour',
        reviews: '100',
        rating: 4

        
    },
    {
        id:'2',
        agencyName: 'Lahore Travels',
        img: Swat,
        destination: 'Swat',
        featured: true,
        description: 'From Lahore to Swat',
        price: 'Rs.6,500',
        stars: 4,
        duration: '3 Days Tour',
        reviews: '100',
        rating: 4
    },
    {
        id:'3',
        agencyName: 'Gilgit Travels',
        img: Gilgit,
        destination: 'Gilgit',
        featured: true,
        description: 'From Lahore to Gilgit',
        price: 'Rs.5,500',
        stars: 5,
        duration: '2 Days Tour',
        reviews: '100',
        rating: 5
    },
    {
        id:'4',
        agencyName: 'Hunza Travels',
        img: Swat,
        destination: 'Hunza Valley',
        featured: false,
        description: 'From Lahore to Hunza',
        price: 'Rs.8,500',
        stars: 5,
        duration: '5 Days Tour',
        reviews: '100',
        rating: 5
    }
]

export default recommendTours;