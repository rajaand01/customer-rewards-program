/**
 * Customer Rewards Program
 * @author Raja Das
 * @exports CustomMessage
 * @param {any} props
 * @returns {any}
 */
import React from "react";
import { Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5'
    },
    messageBox: {
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '30px',
        color: '#ff4d4f',
        fontWeight: '600'
    },
    message: {
        fontSize: '20px',
        color: '#595959',
        marginBottom: '20px'
    },
    button: {
        marginTop: '20px'
    }
};

const CustomMessage = (props) => {
    const { message } = props;

    return (
        <div style={styles.container}>
            <Paper elevation={3} style={styles.messageBox}>
                <Typography style={styles.title}>Oops! Something went wrong</Typography>
                <Typography style={styles.message}>{message}</Typography>
            </Paper>
        </div>
    );
};

CustomMessage.propTypes = {
    message: PropTypes.string
};
export default CustomMessage;
