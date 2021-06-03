import React from 'react';
import {Button, TextField} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <header className="App-header">
                <h2>Pharmacy Portal</h2>
                <TextField style={{marginTop: 30}} label="Enter Patient ID" variant="outlined" />
                <Button variant="contained" color="primary" onClick={() => history.push('/patient')} style={{marginTop: 30}}>
                    Submit
                </Button>
            </header>
        </div>
    );
};

export default Home;
