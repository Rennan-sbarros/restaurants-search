import React, { useState } from 'react';
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import imgRestaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container , Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState();

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true, // Adapta a altura em relação ao conteúdo
    };

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
        </Container>
        <Map />
        </Wrapper>      
    );
};
    
export default Home;