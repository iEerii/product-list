import Waffle from '../images/image-waffle-desktop.jpg';
import CremeBrulee from '../images/image-creme-brulee-desktop.jpg';
import Macaron from '../images/image-macaron-desktop.jpg';
import Tiramisu from '../images/image-tiramisu-desktop.jpg';
import Baklava from '../images/image-baklava-desktop.jpg';
import Pie from '../images/image-meringue-desktop.jpg';
import Cake from '../images/image-cake-desktop.jpg';
import Brownie from '../images/image-brownie-desktop.jpg';
import PannaCotta from '../images/image-panna-cotta-desktop.jpg';

import { Dessert } from './Dessert';
import '../styles/menu.css';

export const Menu = () => {
    return(
        <section className='menuContainer'>
            <ul className='menuList'>
                <li>
                    <Dessert 
                        dessertName='Waffle' 
                        dessertDescription='Waffle with Berries'
                        price='$6.50'
                        dessertImg={ Waffle }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Crème Brùlée' 
                        dessertDescription='Vanilla Bean Crème Brùlée'
                        price='$7.00'
                        dessertImg={ CremeBrulee }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Macaron' 
                        dessertDescription='Macaron Mix of Five'
                        price='$8.00'
                        dessertImg={ Macaron }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Tiramisu' 
                        dessertDescription='Classic Tiramisu'
                        price='$5.50'
                        dessertImg={ Tiramisu }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Baklava' 
                        dessertDescription='Pistachio Baklava'
                        price='$4.00'
                        dessertImg={ Baklava }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Pie' 
                        dessertDescription='Lemon Meringue Pie'
                        price='$5.00'
                        dessertImg={ Pie }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Cake' 
                        dessertDescription='Red Velvet Cake'
                        price='$4.50'
                        dessertImg={ Cake }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Brownie' 
                        dessertDescription='Salted Caramel Brownie'
                        price='$5.50'
                        dessertImg={ Brownie }
                    />
                </li>
                <li>
                    <Dessert 
                        dessertName='Panna Cotta' 
                        dessertDescription='Vanilla Panna Cotta'
                        price='$6.50'
                        dessertImg={ PannaCotta }
                    />
                </li>
            </ul>
        </section>
    )
}
