import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Spinner = () => {

    const [loading, setLoading] = useState(true)

    const override = {
        marginTop: "100px",
        borderColor: "black"
    }


    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", }}>
            <PropagateLoader
                css={override}
                size={30}
                loading={loading}
            />
        </div>
    );
};

export default Spinner;