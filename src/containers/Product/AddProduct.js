import React, { useContext, useState } from 'react';
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
    let [images1, setImages1] = useState('');
    let [images2, setImages2] = useState('');



    function handleClick() {
        let newObj = {
            title: title,
            price: price,
            structure: structure,
            description: description,
            size: size,
            category: category,
            images: [images1, images2],
            id: Date.now()
        }
        addProduct(newObj);
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
                                        list="categories"
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <datalist id="categories">
                                        <option value="hoodie" />
                                        <option value="t-shirts" />
                                        <option value="sweatshirts" />
                                        <option value="shirts" />
                                        <option value="caps" />
                                        <option value="hats" />
                                        <option value="polo" />
                                        <option value="bags" />
                                        <option value="souvenirs" />
                                    </datalist>
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
                                        value={images1}
                                        onChange={(e) => setImages1(e.target.value)}
                                    />
                                </div>
                            </form>
                            <form className="addProduct-form">
                                <div className="addProduct-input-content">
                                    <p>Second Image</p>
                                    <input
                                        className="addProduct-input"
                                        value={images2}
                                        onChange={(e) => setImages2(e.target.value)}
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
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Название: {title}</span>
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setPrice(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Цена: {price}</span>
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setSize(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Размер: {size}</span>
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Категория: {category}</span>
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setStructure(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Состав: {structure}</span>
                                    </h4>
                                    <h4
                                        style={{ color: "black", margin: "0", paddingTop: "10px" }}
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                        <span style={{ color: "#818d92", fontSize: "15px" }}>Описание: {description}</span>
                                    </h4>
                                </div>
                                <div className="addProduct-card-line" ></div>
                                <div style={{ width: '250px', paddingLeft: "15px" }}>
                                    <img style={{ maxWidth: "100%" }} src='' alt="" />
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
