/**
 * Customer Rewards Program
 * @exports ErrorBoundary
 * @author Raja Das
 * @description ErrorBoundary component to catch component throwing error while rendering
 */
import React from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5'
    },
    errorBox: {
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '24px',
        color: '#ff4d4f'
    },
    message: {
        fontSize: '16px',
        color: '#595959',
        marginBottom: '20px'
    },
    button: {
        marginTop: '20px'
    }
};

export default class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = { error: "" };
    }

    componentDidCatch (error) {
        this.setState({ error: `${error.name}: ${error.message}` });
    }

    render () {
        const { error } = this.state;
        if (error) {
            return (
                <div style={styles.container}>
                    <div style={styles.errorBox}>
                        <h1 style={styles.title} data-testid="errorboundary">Oops! Something went wrong.</h1>
                        <p style={styles.message}>
                            {error}
                        </p>
                    </div>
                </div>
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}
