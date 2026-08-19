const search = async (value) => {
    console.log("Searching:", value);

    // const response = await fetch(
    //     `https://api.example.com/search?q=${value}`
    // );

    // const data = await response.json();

    // console.log(data);
};

function debounce(callback, delay) {
    let timer;

    return function (value) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

const debounceSearch = debounce(search, 500);

document.querySelector("#search").addEventListener("input", (e) => {
    debounceSearch(e.target.value);
});