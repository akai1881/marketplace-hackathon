import React from 'react';

const ProductDetails = () => {



    return (
        <div>
            <Grid container>
                <Grid item md={3}>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={3}
                    >
                        <Slider>
                            <Slide index={0}>
                                <ImageWithZoom src={productDetail.image} />
                            </Slide>
                            <Slide index={1}>
                                <ImageWithZoom src={productDetail.image} />
                            </Slide>
                            <Slide index={2}>
                                <ImageWithZoom src={productDetail.image} />
                            </Slide>
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>
                </Grid>
                <Grid item md={9}>
                    <Paper>
                        <Grid item md={9}>
                            <Paper style={{ textAlign: "center" }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Title:</td>
                                            <td>{productDetail.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Price:</td>
                                            <td>{productDetail.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Sale Price</td>
                                            <td>{productDetail.salePrice}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td> {productDetail.description} </td>
                                        </tr>
                                        <tr>
                                            <td>Count in stock</td>
                                            <td> {productDetail.countInStock} </td>
                                        </tr>
                                        <tr>
                                            <td>Author</td>
                                            <td> {productDetail.author} </td>
                                        </tr>
                                        <tr>
                                            <td>Phone number</td>
                                            <td> {productDetail.phone} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductDetails;