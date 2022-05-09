function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
  }

  function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        const array1 = items.slice(0, i);
        const array2 = items.slice(i + 1); 
        let out = [...array1, ...array2]; 
        return out; 
      }
    }

    return undefined; 
  }

  export {choice, remove}