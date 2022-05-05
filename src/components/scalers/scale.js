export const scale = (inputScale, outputScale, input, scaler) => {
    if (input < inputScale[0]) {
        return outputScale[0];
    }
    else if (input > inputScale[inputScale.length-1]) {
        return outputScale[outputScale.length-1];
    }
    else {
        for (let i = 0; i < outputScale.length-1; i++) {
            if (inputScale[i]<=input && input<inputScale[i+1]) {
                return scaler([inputScale[i], inputScale[i+1]], [outputScale[i], outputScale[i+1]], input);
            }
        }
    }
};

export const linearScaler = (inputScale, outputScale, input) => {
    const k = (outputScale[1]-outputScale[0])/(inputScale[1]-inputScale[0])
    if (input <= inputScale[0]) {
        return outputScale[0];
    }
    else if (input > inputScale[1]) {
        return outputScale[1];
    }
    else {
        return outputScale[0]+k*(input-inputScale[0])
    }
}

export const sinScaler = (inputScale, outputScale, input) => {
    if (input <= inputScale[0]) {
        return outputScale[0];
    }
    else if (input > inputScale[1]) {
        return outputScale[1];
    }
    else {
        return outputScale[0]+(0.5*Math.sin((((input-inputScale[0])/(inputScale[1]-inputScale[0]))*10-5)/Math.PI)+0.5)*(outputScale[1]-outputScale[0]);
    }
}