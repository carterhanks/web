console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
[]
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

//Hover Efect

const hoverCat = document.querySelector("img[src='https://arrowdogcat.com/wp-content/uploads/2019/10/Vomiting-in-Cats.jpg']")
hoverCat.src = "https://arrowdogcat.com/wp-content/uploads/2019/10/Vomiting-in-Cats.jpg"

hoverCat.addEventListener('mouseover', () => {
	alert("Congratulations! You've unlocked a new definition!: **Yarf: (slang) To sling vomit, especially violently or profusely.** -ie 'Suddenly the cat began to dry-heave to the point of yarfing salmon amongst the vastness of the forest.'-")
})

