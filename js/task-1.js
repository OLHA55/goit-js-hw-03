function slugify(title) {
    const message = title.toLowerCase();
    const word = message.split(' ');
         return word.join("-");
    }
   
slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");



console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

