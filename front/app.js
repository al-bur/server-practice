async function getSomething() {
  const a = await fetch("http://localhost:3000/about");
  const res = await a.json();

  const people = document.querySelector("#people");
  people.textContent = JSON.stringify(res);
}

getSomething();
