import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
    <div>
      {newEditItem ? (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ flexDirection: 'column' }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Title"
              name="title"
              value={newEditItem.title}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Price"
              name="price"
              value={newEditItem.price}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Structure"
              name="structure"
              value={newEditItem.structure}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Description"
              name="description"
              value={newEditItem.description}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Size"
              name="size"
              value={newEditItem.size}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Image 1"
              name="images"
              value={newEditItem.images[0]}
              onChange={handleValue}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Image 2"
              name="images"
              value={newEditItem.images[1]}
              onChange={handleValue}
            />
          </form>

          <div style={{ marginTop: '30px' }}>
            <Button size="small" variant="outlined" color="primary">
              Cancel
            </Button>
            <Link to="/">
              <Button
                style={{ left: '30px' }}
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                onClick={() => saveProduct(newEditItem)}
              >
                Save
              </Button>
            </Link>
          </div>
        </Grid>
      ) : (
        <h1 style={{ color: 'black' }}>Loading...</h1>
      )}
    </div>
  );
};

export default EditProduct;
