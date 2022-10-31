const emailRef = document.querySelector(".email");

// 1. then
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
   emailRef.innerHTML = data.email
  });

// 2. async/await
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data);
    emailRef.innerHTML = data.email
}

main()
