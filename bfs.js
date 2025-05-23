"use strict";
const boardLen = 8;
const board = [];
for (let i = 0; i < boardLen; i++) {
    const row = Array(boardLen).fill(0);
    board.push(row);
}

const visited = [];
for (let i = 0; i < boardLen; i++) {
    const row = Array(boardLen).fill(false);
    visited.push(row);
}

const start = [3, 3];
const end = [4, 3];

const q = [];
const moves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
];

q.push([start, [start]]);
visited[start[0]][start[1]] = true;

while (q.length > 0) {
    const [coords, path] = q.shift();

    let [i, j] = coords;

    if (i == end[0] && j == end[1]) {
        console.log(`path found of length ${path.length - 1}. path is ${path}`);
        break;
    }

    for (let move of moves) {
        const newI = i + move[0];
        const newJ = j + move[1];

        if (
            newI >= 0 &&
            newJ >= 0 &&
            newI < boardLen &&
            newJ < boardLen &&
            !visited[newI][newJ]
        ) {
            const newPath = [...path];
            newPath.push([newI, newJ]);
            q.push([[newI, newJ], newPath]);
            visited[newI][newJ] = true;
        }
    }
}
