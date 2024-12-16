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
        height: '100vh'
    },
    messageBox: {
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '#0000004d 0 2px 16px 2px'
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
        <div style={styles.container} data-testid="custom-message-container">
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
