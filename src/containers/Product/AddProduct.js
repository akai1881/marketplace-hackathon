import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const { addProduct } = useContext(productsContext)

    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [structure, setStructure] = useState('');
    let [description, setDescription] = useState('');
    let [size, setSize] = useState('');
    let [images, setImages] = useState([]);



    function handleClick() {
        let newObj = {
            title: title,
            price: price,
            structure: structure,
            description: description,
            size: size,
            images: ['', ''],
            id: Date.now()
        }
        addProduct(newObj);
        setTitle('');
        setPrice('');
        setStructure('');
        setDescription('');
        setSize('');
        setImages([]);
    }



    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            }, price
        },
    }));

    const classes = useStyles();


    return (
        <div>
            <Grid container justify="center" alignItems="center" style={{ flexDirection: 'column' }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </form>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </form>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Structure"
                        value={structure}
                        onChange={(e) => setStructure(e.target.value)}
                    />
                </form>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </form>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </form>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Image 1"
                        value={images[0]}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </form>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Image 2"
                        value={images[1]}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </form>

                <div style={{ marginTop: "30px" }}>
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                    >
                        Cancel
                        </Button>
                    <Link to='/'>
                        <Button
                            style={{ left: "30px" }}
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<SaveIcon />}
                            onClick={handleClick}
                        >
                            Save
                            </Button>

                    </Link>
                </div>
            </Grid>
        </div>
    );
};

export default AddProduct;