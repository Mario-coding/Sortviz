export const bubbleSort = (array) => {
    const animations = [];
    for (let i = 0; i < array.length - 1; ++i) {
        for (let j = i + 1; j < array.length; ++j) {
            if (array[i] > array[j]) {
                animations.push({ comparison: [i, j], swap: true });
                [array[i], array[j]] = [array[j], array[i]]
            } else {
                animations.push({ comparison: [i, j], swap: false });
            }
        }
    }

    return animations;
}