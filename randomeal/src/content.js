(() => {
    const RESTAURANT_CLASS = 'RestaurantItem__Root'
    const CLOSED_RESTAURANT_CLASS = 'ClosedRestaurant__Root'
    const FUTURE_ORDER_RESTAURANT_CLASS = 'Header__FutureOrder'

    const restaurants = document.querySelectorAll(`div[class^='${RESTAURANT_CLASS}']`)
    const openRestaurants = Array.from(restaurants).filter(
        rest => rest.querySelectorAll(`div[class^='${CLOSED_RESTAURANT_CLASS}']`).length === 0
    ).filter(
        rest => rest.querySelectorAll(`div[class^='${FUTURE_ORDER_RESTAURANT_CLASS}']`).length === 0
    )

    if (openRestaurants.length) {
        const randomRestaurantIndex = Math.floor(Math.random() * openRestaurants.length)
        openRestaurants[randomRestaurantIndex].click()
    } else {
        window.alert("Cannot find any open restaurants :(\n" +
            "Try going to the main page. If you're already there, try again later.");
    }
})()
