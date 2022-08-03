
// You should implement your task here.

module.exports = function towelSort (matrix) {
    //return empty array if no params & if matrix is empty
    if (matrix === undefined || matrix.length === 0) return [];

    let arr = [];

    for (let i = 0; i < matrix.length; i++) { //идем по каждой строчке матрицы

        for (let j = 0; j < matrix[i].length; j++) { //по каждому элементу строчки идем до конца длины(переск.столбцы)
          let columnIdx = i % 2 === 0 //какой индекс текущего столбца рассматриваем(четн\нечетн)
            ? j //если четн, то идем в естеств.порядке слева-направо, какой индекс j пришел такой ставим в матрицу [columnIdx]
            : (matrix[i].length - j - 1); //индекс нечетн,то максим.число элементов(длина строки) -j-1 (length-1 = последн.элемент и -j сдвиг влево)

            arr.push(matrix[i][columnIdx]);
        }
    }
    return arr;
}
