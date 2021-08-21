import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import imgRestaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map} from '../../components';

import { Container , Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null)
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
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
                    <Card photo={imgRestaurante} title="Nome do Restaurante"/>
                    <Card photo={imgRestaurante} title="Nome do Restaurante"/>
                    <Card photo={imgRestaurante} title="Nome do Restaurante"/>
                    <Card photo={imgRestaurante} title="Nome do Restaurante"/>
                    <Card photo={imgRestaurante} title="Nome do Restaurante"/>
                    <Card photo={imgRestaurante} title="Nome do Restaurante"/>
                </Carousel>
            </Search>
            <RestaurantCard />
        </Container>
        <Map query={query} />
        {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />*/}
        </Wrapper>      
    );
};
    
export default Home;