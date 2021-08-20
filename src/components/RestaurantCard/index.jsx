import React from 'react';
import ReactStars from 'react-rating-stars-component';
import imgRestaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles'; 

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars 
                count={5}
                value={4}
                isHalf
                edit={false}
                activeColor="#e7711c"
            />
            <Address>Rua Jangamaica, 240</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={imgRestaurante} alt="foto do restaurante" />
    </Restaurant>);

export default RestaurantCard;