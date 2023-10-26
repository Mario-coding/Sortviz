import {
    BUBBLE_SORT,
    MERGE_SORT,
    HEAP_SORT,
    QUICK_SORT,
} from "../algorithms/type/sortType";
import SortingButton from "./SortingButton";

const Navbar = ({ resetArray, sortArray, isSorting }) => {
    return (
        <div className="navbar bg-[#191E25]">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-[#A5ADBA]">
                    SortViz
                </a>
            </div>
            <div className="flex-none hidden md:block max-w-screen-sm">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={BUBBLE_SORT}
                            isSorting={isSorting}
                            text="Bubble Sort"
                        />
                    </li>
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={HEAP_SORT}
                            isSorting={isSorting}
                            text="Heap Sort"
                        />
                    </li>
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={MERGE_SORT}
                            isSorting={isSorting}
                            text="Merge Sort"
                        />
                    </li>
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={QUICK_SORT}
                            isSorting={isSorting}
                            text="Quick Sort"
                        />
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                resetArray();
                            }}
                            style={{ color: "#A5ADBA" }}
                        >
                            Reset
                        </button>
                    </li>
                </ul>
            </div>
            <div className="dropdown dropdown-end md:hidden max-w-screen-sm">
                <label tabIndex={0} className="btn bg-[#191E25] text-[#A5ADBA]">
                    Algorithms
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#191E25]"
                >
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={BUBBLE_SORT}
                            isSorting={isSorting}
                            text="Bubble Sort"
                        />
                    </li>
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={HEAP_SORT}
                            isSorting={isSorting}
                            text="Heap Sort"
                        />
                    </li>
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={MERGE_SORT}
                            isSorting={isSorting}
                            text="Merge Sort"
                        />
                    </li>
                    <li>
                        <SortingButton
                            sortArray={sortArray}
                            sortType={QUICK_SORT}
                            isSorting={isSorting}
                            text="Quick Sort"
                        />
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                resetArray();
                            }}
                            style={{ color: "#A5ADBA" }}
                        >
                            Reset
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
