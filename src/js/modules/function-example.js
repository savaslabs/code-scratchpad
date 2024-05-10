export function functionExample(el) {
  if (el && el.textContent && el.textContent.length > 0) {
    console.log(
      `Contents of title from functional component: ${el.textContent}`
    );
  } else {
    console.log('you definitely called a function, well done.')
  }
}