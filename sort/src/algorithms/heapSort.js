const siftdown = (array, i, heapSize, animations) => {
    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;
    let maxIndex = i;

    if (rightIndex < heapSize && array[rightIndex] > array[maxIndex]) {
        maxIndex = rightIndex;
    }

    if (leftIndex < heapSize && array[leftIndex] > array[maxIndex]) {
        maxIndex = leftIndex;
    }

    if (maxIndex !== i) {
        animations.push({ comparison: [i, maxIndex], swap: true });
        [array[maxIndex], array[i]] = [array[i], array[maxIndex]];
        siftdown(array, maxIndex, heapSize, animations);
    }
}

const heapify = (array, animations) => {
    const heapSize = array.length;
    for (let i = Math.floor((array.length - 1) / 2); i >= 0; --i) {
        siftdown(array, i, heapSize, animations)
    }
}

export const heapSort = (array) => {
    const animations = [];
    heapify(array, animations);

    for (let i = array.length - 1; i > 0; i--) {
        animations.push({ comparison: [i, 0], swap: true });
        [array[0], array[i]] = [array[i], array[0]];
        siftdown(array, 0, i, animations);
    }

    return animations;
}