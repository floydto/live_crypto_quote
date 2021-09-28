import * as React from 'react';
import { navigate } from 'gatsby';

const Index = (props) => {
    React.useEffect(() => {
        navigate("/spot", { replace: true });
    });
    return <div></div>;
};

export default Index


