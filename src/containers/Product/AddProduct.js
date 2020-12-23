import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const { addProduct } = useContext(productsContext)

    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [structure, setStructure] = useState('');
    let [description, setDescription] = useState('');
    let [size, setSize] = useState('');
    let [category, setCategory] = useState('');
    let [images, setImages] = useState([]);



    function handleClick() {
        let newObj = {
            title: title,
            price: price,
            structure: structure,
            description: description,
            size: size,
            category: category,
            images: ['', ''],
            id: Date.now()
        }
        addProduct(newObj);
        setTitle('');
        setPrice('');
        setStructure('');
        setDescription('');
        setSize('');
        setCategory('');
        setImages([]);
    }



    return (
        <>
            <div className="addProduct-container">
                <div className="addProduct-content">
                    <div className="addProduct-title">
                        <h1>Добавление товара</h1>
                    </div>
                    <Grid container>
                        <Grid item md={6} style={{ paddingRight: "100px" }}>
                            <h2>Введите данные для добавление товара</h2>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Title</p>
                                    <input
                                        className="addProduct-input"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Price</p>
                                    <input
                                        className="addProduct-input"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Size</p>
                                    <input
                                        className="addProduct-input"
                                        label="Size"
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Category</p>
                                    <input
                                        className="addProduct-input"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Structure</p>
                                    <input
                                        className="addProduct-input"
                                        value={structure}
                                        onChange={(e) => setStructure(e.target.value)}
                                    />
                                </div>
                            </form>

                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Description</p>
                                    <input
                                        className="addProduct-input"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>First Image</p>
                                    <input
                                        className="addProduct-input"
                                        value={images[0]}
                                        onChange={(e) => setImages(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Second Image</p>
                                    <input
                                        className="addProduct-input"
                                        value={images[1]}
                                        onChange={(e) => setImages(e.target.value)}
                                    />
                                </div>
                            </form>

                            <div className="addProduct-buttons">
                                <Link to="/">
                                    <button
                                        className="addProduct-button"
                                    >
                                        Cancel
                                    </button>
                                </Link>
                                <Link to='/'>
                                    <button
                                        className="addProduct-button"
                                        onClick={handleClick}
                                    >
                                        Save
                                    </button>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={6} >
                            <div className="addProduct-card">
                                <div className="addProduct-card-title">
                                    <h1>Ваш товар</h1>
                                </div>
                            </div>
                            <div className="addProduct-card-content">
                                <div className="addProduct-card-content-left">
                                    <h4
                                        style={{ color: "black", margin: "0" }}
                                        onChange={(e) => setTitle(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Название: </span>{title}
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setPrice(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Цена: </span>{price}
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setSize(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Размер: </span>{size}
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Категория: </span>{category}
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setStructure(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Состав: </span>{structure}
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Описание: </span>{description}
                                    </h4>
                                </div>
                                <div className="addProduct-card-line" ></div>
                                <div>
                                    <img style={{ width: "100px" }} src='' alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default AddProduct;