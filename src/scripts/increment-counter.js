function increaseCounter(counter) {
  console.log(counter.dataset.count);

  const counterSet = counter.dataset.count;

  for (let index = 0; index < counterSet.length; index++) {
    console.log(counterSet.charAt(index));
  }
  // return count.charAt(index);
}

export { increaseCounter };
