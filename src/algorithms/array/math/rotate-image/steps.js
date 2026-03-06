function cloneMatrix(matrix) {
  return matrix.map((row) => [...row]);
}

export function getSteps(matrix) {
  const workingMatrix = cloneMatrix(matrix);
  const len = workingMatrix.length;
  const steps = [];
  steps.push({
    action: "matrix-original",
    matrix: cloneMatrix(workingMatrix),
    text: `This is the original matrix.`,
  });
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      steps.push({
        action: "swap-start",
        matrix: cloneMatrix(workingMatrix),
        element1: `[${i},${j}]`,
        element2: `[${j},${i}]`,
        row: i,
        column: j,
        value1: workingMatrix[i][j],
        value2: workingMatrix[j][i],
        text: `The selected elements are [${workingMatrix[i][j]}, ${workingMatrix[j][i]}].`,
      });
      const dummy = workingMatrix[i][j];
      workingMatrix[i][j] = workingMatrix[j][i];
      workingMatrix[j][i] = dummy;
      steps.push({
        action: "swap-end",
        matrix: cloneMatrix(workingMatrix),
        element1: `[${i},${j}]`,
        element2: `[${j},${i}]`,
        row: i,
        column: j,
        value: dummy,
        text: `The selected elements are [${workingMatrix[i][j]}, ${workingMatrix[j][i]}].`,
      });
    }
  }

  steps.push({
    action: "transpose-end",
    matrix: cloneMatrix(workingMatrix),
    text: `The elements outside the main diagonal are now inverted.`,
  });

  for (let i = 0; i < len; i++) {
    steps.push({
      action: "row-inversion",
      matrix: cloneMatrix(workingMatrix),
      row: i,
      text: `Now we will invert the elements of the row [${i}].`,
    });
    for (let j = 0; j < Math.floor(len / 2); j++) {
      steps.push({
        action: "inversion-start",
        matrix: cloneMatrix(workingMatrix),
        element1: `[${i},${j}]`,
        element2: `[${i},${len - 1 - j}]`,
        row: i,
        column: j,
        value1: workingMatrix[i][j],
        value2: workingMatrix[i][len - 1 - j],
        text: `The selected elements are [${workingMatrix[i][j]}, ${workingMatrix[i][len - 1 - j]}].`,
      });
      const dummy = workingMatrix[i][j];
      workingMatrix[i][j] = workingMatrix[i][len - 1 - j];
      workingMatrix[i][len - 1 - j] = dummy;
      steps.push({
        action: "inversion-end",
        matrix: cloneMatrix(workingMatrix),
        element1: `[${i},${j}]`,
        element2: `[${i},${len - 1 - j}]`,
        row: i,
        column: j,
        value: dummy,
        text: `The selected elements are [${workingMatrix[i][j]}, ${workingMatrix[i][len - 1 - j]}].`,
      });
    }
  }

  steps.push({
    action: "rotation-end",
    matrix: cloneMatrix(workingMatrix),
    text: `The matrix has been rotated.`,
  });

  return steps;
}
