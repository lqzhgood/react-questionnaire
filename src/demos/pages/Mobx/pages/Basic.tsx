import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

class Timer {
    ms = 0;
    constructor() {
        makeAutoObservable(this);
    }
    increase() {
        this.ms++;
    }
    reset() {
        this.ms = 0;
    }
}

const myTimer = new Timer();

type PropsType = { timer: Timer };

const TimerView = observer((props: PropsType) => {
    const { timer } = props;
    return <button onClick={() => timer.reset()}>ms: {timer.ms}</button>;
});

const Basic = () => {
    useEffect(() => {
        const id = setInterval(() => {
            myTimer.increase();
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div>
            <h2>Basic</h2>
            <TimerView timer={myTimer} />
            <TimerView timer={myTimer} />
        </div>
    );
};

export default Basic;
