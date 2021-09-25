import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Spot from '../components/spot';
// import '../components/future';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// function IndexPage() {
// const [value, setValue] = React.useState(0);
// const handleChange = (event, newValue) => {
//     setValue(newValue);
// };

// return (
//     <Box sx={{ width: "100%", bgcolor: "white" }}>
//         <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="secondary"
//             indicatorColor="secondary"
//             centered
//         >
//             {/* <Link to="/"> Go back to the homepage </Link> */}
//             <Tab Link to="/" label="spot" label="spot" />
//             <Tab label="Future" label="Future" />
//         </Tabs>
//     </Box>
// )

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="SPOT" {...a11yProps(0)} />
                    <Tab label="FUTURE" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Spot />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h1>123</h1>
            </TabPanel>
        </Box>
    );
}


export { TabPanel, BasicTabs };
