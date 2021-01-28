const getRandomeal = () => {
    const restaurants = document.querySelectorAll("div[class^='RestaurantItemBoxStyled__Root']")
    const openRestaurants = Array.from(restaurants).filter(
        rest => rest.querySelectorAll("div[class^='RestaurantItemBoxStyled__Closed']").length === 0
    )

    if (openRestaurants.length) {
        const randomRestaurantIndex = Math.floor(Math.random() * openRestaurants.length)
        openRestaurants[randomRestaurantIndex].click()
    } else {
        window.alert("Cannot find any open restaurants :(\n" +
            "Try going to the main page. If you're already there, try again later.");
    }
}
