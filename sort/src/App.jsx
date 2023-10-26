import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { bubbleSort } from "./algorithms/bubbleSort";
import { quickSort } from "./algorithms/quickSort";
import { heapSort } from "./algorithms/heapSort";
import { mergeSort } from "./algorithms/mergeSort";
import {
    BUBBLE_SORT,
    MERGE_SORT,
    HEAP_SORT,
    QUICK_SORT,
} from "./algorithms/type/sortType";

function App() {
    const [array, setArray] = useState([]);
    const [move, setMove] = useState({});
    const [sliderValue, setSliderValue] = useState(40);
    const [isSorting, setIsSorting] = useState(false);
    const animationTimer = useRef(null);

    useEffect(() => {
        resetArray();
    }, []);

    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const resetArray = () => {
        if (animationTimer.current) {
            clearTimeout(animationTimer.current);
        }

        const newArray = [];
        for (let i = 0; i < sliderValue; i++) {
            newArray.push(randomInteger(5, 650));
        }

        setArray(newArray);
        setMove({});
        setSortingStatus(false);
    };

    const setSortingStatus = (status) => {
        setIsSorting(status);
    };

    const sortArray = (type) => {
        const copy = [...array];
        let animation;

        switch (type) {
            case BUBBLE_SORT:
                animation = bubbleSort(copy);
                break;

            case QUICK_SORT:
                animation = quickSort(copy);
                break;

            case HEAP_SORT:
                animation = heapSort(copy);
                break;

            case MERGE_SORT:
                animation = mergeSort(copy);
                break;

            default:
                return;
        }

        setIsSorting(true);
        performSortingAnimations(animation);
    };

    const performSortingAnimations = (animations) => {
        if (animations.length === 0) {
            setIsSorting(false);
            return;
        }

        const animate = animations.shift();
        const [i, j] = animate.comparison;
        const index = [i, j];
        let isSwap = false;
        let isOverride = false;

        if (animate.swap) {
            [array[i], array[j]] = [array[j], array[i]];
            setArray([...array]);
            isSwap = true;
        }

        if (animate.override) {
            array[i] = j;
            setArray([...array]);
            isOverride = true;
        }

        setMove({ index, isSwap, isOverride });
        animationTimer.current = setTimeout(() => {
            setMove({});
            performSortingAnimations(animations);
        }, 50);
    };

    const getBackgroundColor = (index) => {
        if (move.index?.length === 2) {
            const [i, j] = move.index;
            if (index === i || index === j) {
                return move.isSwap || move.override ? "#a78bfa" : "#93c5fd";
            }
        }
        return "";
    };

    return (
        <div className="flex flex-col items-center min-h-screen gap-[20px] bg-[#1D232A]">
            <Navbar
                resetArray={resetArray}
                sortArray={sortArray}
                isSorting={isSorting}
                setSortingStatus={setSortingStatus}
            />
            <div className="w-full">
                <h1 className="mx-[30px] mb-[10px] text-[#A5ADBA]">
                    Array Size:{" "}
                </h1>
                <input
                    type="range"
                    min={5}
                    max={window.innerWidth >= 640 ? 50 : 30}
                    value={sliderValue}
                    className={`range ${
                        !isSorting ? "range-error" : ""
                    } max-w-[200px] mx-[30px]`}
                    onChange={(e) => {
                        setSliderValue(e.target.value);
                        resetArray();
                    }}
                    disabled={isSorting}
                />
            </div>
            <div className="flex gap-[5px] items-end grow">
                {array.map((val, index) => (
                    <div
                        key={index}
                        className="w-[3px] bg-red-400"
                        style={{
                            height: `${val}px`,
                            backgroundColor: getBackgroundColor(index),
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;
