const data = [1 , 8 , 9 , 5 , 3 , 8];

data.forEach((e , index) => {
    data[index] = data[index] * 2;
})

console.log(data);