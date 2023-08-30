document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('search-input');

    function performSearch() {
        const query = input.value.trim();
        if (query !== '') {
            const encodedQuery = encodeURIComponent(query);
            const searchURL = `https://www.deakin.edu.au/students/search?query=${encodedQuery}`;
            window.location.href = searchURL; 
        }
    }

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            performSearch();
        }
    });
});
