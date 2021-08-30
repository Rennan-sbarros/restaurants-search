import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.svg';
import imgRestaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map} from '../../components';

import { Container , Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';
import { Restaurant } from '../../components/RestaurantCard/styles';


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants)

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true, // Adapta a altura em relação ao conteúdo
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return(
        <Wrapper>
            <Container>
            <Search>
                <Logo src={logo} alt="Logo do site" />
                <TextField
                    label='Pesquisar Restaurantes'
                    outlined
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                    <Input
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                </TextField>
                <CarouselTitle>
                    Na sua Área
                </CarouselTitle>
                <Carousel {...settings}>
                    {restaurants.map((restaurant) => (
                    <Card 
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : imgRestaurante }
                    title={restaurant.name}
                    />
                    ))}
                </Carousel>
            </Search>
            {restaurants.map((restaurant) => (
                <RestaurantCard 
                    onClick={() => handleOpenModal(restaurant.place_id)} 
                    restaurant={restaurant}
                />
            ))}
        </Container>
        <Map query={query} placeId={placeId} />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
                {restaurantSelected?.opening_hours?.open_now ? 'Aberto agora' : 'Fechado neste momento'}
            </ModalContent>
        </Modal>
        </Wrapper>      
    );
};
    
export default Home;