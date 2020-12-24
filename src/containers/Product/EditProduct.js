import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Wrapper from '../Dashboard/Wrapper';

const EditProduct = () => {
  const { editToProduct, saveProduct } = useContext(productsContext);
  const [newEditItem, setNewEditItem] = useState(editToProduct);

  useEffect(() => {
    setNewEditItem(editToProduct);
  }, [editToProduct]);

  function handleValue(e) {
    let newObj = {
      ...newEditItem,
      [e.target.name]: e.target.value,
    };
    setNewEditItem(newObj);
  }

  console.log(newEditItem);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Wrapper>
      {newEditItem ?
        <div className="addProduct-container">
          <div className="addProduct-content">
            <div className="addProduct-title">
              <h1>Изменение товара</h1>
            </div>
            <Grid container>
              <Grid item md={6} style={{ paddingRight: "100px" }}>
                <h2>Введите данные для изменение товара</h2>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Title</p>
                    <input
                      className="addProduct-input"
                      defaultValue={newEditItem.title}
                      name="title"
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Price</p>
                    <input
                      className="addProduct-input"
                      defaultValue={newEditItem.price}
                      name="price"
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Size</p>
                    <input
                      className="addProduct-input"
                      name="size"
                      defaultValue={newEditItem.size}
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Category</p>
                    <input
                      className="addProduct-input"
                      name="category"
                      defaultValue={newEditItem.category}
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Structure</p>
                    <input
                      className="addProduct-input"
                      name="structure"
                      defaultValue={newEditItem.structure}
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Description</p>
                    <input
                      className="addProduct-input"
                      name="description"
                      defaultValue={newEditItem.description}
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>First Image</p>
                    <input
                      className="addProduct-input"
                      defaultValue={newEditItem.images[0]}
                      onChange={handleValue}
                    />
                  </div>
                </form>
                <form className="addProduct-form">
                  <div className="addProduct-input-content">
                    <p>Second Image</p>
                    <input
                      className="addProduct-input"
                      defaultValue={newEditItem.images[0]}
                      onChange={handleValue}
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
                      onClick={() => saveProduct(newEditItem)}
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
                    >
                      <span style={{ color: "#818d92", fontSize: "15px" }}>Название: {newEditItem.title}</span>
                    </h4>
                    <h4
                      style={{ color: "black", margin: "0", paddingTop: "10px" }}
                    >
                      <span style={{ color: "#818d92", fontSize: "15px" }}>Цена: {newEditItem.price}</span>
                    </h4>
                    <h4
                      style={{ color: "black", margin: "0", paddingTop: "10px" }}
                    >
                      <span style={{ color: "#818d92", fontSize: "15px" }}>Размер: {newEditItem.size}</span>
                    </h4>
                    <h4
                      style={{ color: "black", margin: "0", paddingTop: "10px" }}
                    >
                      <span style={{ color: "#818d92", fontSize: "15px" }}>Категория: {newEditItem.category}</span>
                    </h4>
                    <h4
                      style={{ color: "black", margin: "0", paddingTop: "10px" }}
                    >
                      <span style={{ color: "#818d92", fontSize: "15px" }}>Состав: {newEditItem.structure}</span>
                    </h4>
                    <h4
                      style={{ color: "black", margin: "0", paddingTop: "10px" }}
                    >
                      <span style={{ color: "#818d92", fontSize: "15px" }}>Описание: {newEditItem.description}</span>
                    </h4>
                  </div>
                  <div className="addProduct-card-line" ></div>
                  <div style={{ width: '250px', height: "100px", paddingLeft: "15px" }}>
                    <img style={{ maxWidth: "100%" }} src={newEditItem.images[0]} alt="" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        :
        <Spinner />
      }
    </Wrapper>
  );
};

export default EditProduct;
