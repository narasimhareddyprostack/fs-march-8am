let goToMovie = (success, failure) => {
    let money = 850;
    money >= 750 ? success("Go To Movies!") : failure("Go to PG! Enjoy")
}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.error(err)
})