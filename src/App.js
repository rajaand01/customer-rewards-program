import React from 'react';
import './App.less';
import RewardScreen from './screen/RewardScreen/rewardScreen';
import ErrorBoundary from './component/ErrorBoundary/errorBoundary';

function App () {
    return (
        <div className="App">
            <ErrorBoundary>
                <RewardScreen />
            </ErrorBoundary>
        </div>
    );
}

export default App;
