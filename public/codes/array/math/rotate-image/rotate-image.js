function rotate (matrix) {
    const len = matrix.length
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            const dummy = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = dummy
        }
    }
    
    for(let i = 0; i < len; i++){
        for(let j = 0; j < Math.floor(len / 2); j++){
            const dummy = matrix[i][j]
            matrix[i][j] = matrix[i][len - 1 - j]
            matrix[i][len - 1 - j] = dummy
        }
    }
    
};