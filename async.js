async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/')

    console.log(response)
    console.log("Solomon is wise")
}

const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    console.log(response)
    console.log("Solomon is wise")
}


console.log("Success is smart")


getPhotos()

getTodos()


console.log("Jesus is the son of God")



