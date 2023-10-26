const SortingButton = ({ sortArray, isSorting, sortType, text }) => {
    return (
        <>
            <button
                onClick={() => sortArray(sortType)}
                disabled={isSorting}
                style={{ color: "#A5ADBA" }}
            >
                {isSorting ? "Sorting..." : text}
            </button>
        </>
    );
};

export default SortingButton;
