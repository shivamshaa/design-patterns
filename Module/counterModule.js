const CounterModule = (() => {
    let counter = 0;

    return {
        increment: () => {
            counter++;
            console.log(counter);
        },
        decrement: () => {
            counter--;
            console.log(counter);
        },
        getCount: () => counter
    };
})();