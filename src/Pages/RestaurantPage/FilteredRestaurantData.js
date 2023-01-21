import FoodImage from '../../assets/FoodAssets/restaurant1.png'
import FoodImage1 from '../../assets/FoodAssets/restaurant2.png'
import FoodImage2 from '../../assets/FoodAssets/restaurant3.png'
import Rakapshi from '../../assets/PlacesAssets/swat.png'

const restaurantData = [
    {
        id:'1',
        img: FoodImage,
        restaurantName: 'Cafe De Hunza',
        featured: true,
        rating: '4.5',
        reviews: '2,800',
        time: '11:30 AM - 12:00 AM',
        location: 'Hunza Valley, Gilgit Baltistan, Pakistan',
        stars:4
    },
    {
        id:'2',
        img: FoodImage1,
        restaurantName: 'Pablos',
        featured: true,
        rating: '4.5',
        reviews: '200',
        time: '11:30 AM - 12:00 AM',
        location: 'Hunza Valley, Gilgit Baltistan, Pakistan',
        stars:5
    },
    {
        id:'3',
        img: FoodImage2,
        restaurantName: 'Cafe Ayalanto',
        featured: true,
        rating: '4.5',
        reviews: '1,100',
        time: '11:30 AM - 12:00 AM',
        location: 'Hunza Valley, Gilgit Baltistan, Pakistan',
        stars:4
    },
    {
        id:'4',
        img: Rakapshi,
        restaurantName: 'Ten Hill Cafe',
        featured: true,
        rating: '4.5',
        reviews: '2,800',
        time: '11:30 AM - 12:00 AM',
        location: 'Hunza Valley, Gilgit Baltistan, Pakistan',
        stars:4
    }
]

export default restaurantData;