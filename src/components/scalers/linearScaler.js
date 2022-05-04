export const linearScaler = (inputScale, outputScale, input) => {
    const k = (outputScale[1]-outputScale[0])/(inputScale[1]-inputScale[0])
    if (input < inputScale[0]) {
        return outputScale[0];
    }
    else if (input > inputScale[1]) {
        return outputScale[1];
    }
    else {
        return outputScale[0]+k*(input-inputScale[0])
    }
};