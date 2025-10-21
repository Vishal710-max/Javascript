
// const myHeaders = new Headers()
// myHeaders.append("Content-Type", "application/json");

// let url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "Shreyash Patil" }),
//     headers: myHeaders,
// };


async function postData() {
    const responce = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'Shreyash -> I am in love with someone.',
            userId: 5,
            /* other post data */
        })
    })

    let data = await responce.json();
    console.log("post Data responce: ", data)
}

async function getData() {
    const responce = await fetch('https://dummyjson.com/posts/user/252');
    let data = await responce.json();
    console.log("get Data responce: ", data)
}


async function processData() {
    await postData();
    await getData();
}

processData();

// In above code it can able to post the data but does not get the data i.e website does not maintain the data

