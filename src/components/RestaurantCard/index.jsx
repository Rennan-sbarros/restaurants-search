import React from 'react';
import ReactStars from 'react-rating-stars-component';

import imgRestaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles'; 

const RestaurantCard = ({ restaurant, onClick }) => (
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars 
                count={5}
                value={restaurant.rating}
                isHalf
                edit={false}
                activeColor="#e7711c"
            />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : imgRestaurante} alt="foto do restaurante" />
    </Restaurant>);

export default RestaurantCard;