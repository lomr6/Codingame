/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const playerIdx: number = parseInt(readline());
const nbGames: number = parseInt(readline());

type Direction = 'LEFT' | 'DOWN' | 'RIGHT' | 'UP';

function decideMove(playerPos: number, track: string): string {
    const hurdlePositions = track.split('').map((char, idx) => char === '#' ? idx : -1).filter(idx => idx !== -1).filter(idx => idx > playerPos);
    
    const playerMovements: { direction: Direction, distance: number, jump?: boolean }[] = [
        {
            direction: 'LEFT',
            distance: 1,
        },
        {
            direction: 'DOWN',
            distance: 2
        },
        {
            direction: 'RIGHT',
            distance: 3
        },
        {
            direction: 'UP',
            distance: 2,
            jump: true
        }
    ];

    let bestMove = 'LEFT';
    let maxDistance = 0;

    for (const playerMovement of playerMovements) {
        let newPos = playerPos + playerMovement.distance;

        if (hurdlePositions.includes(playerPos + 1)) {
            return 'UP';
        } else if (!inCollision(hurdlePositions[0], playerPos, newPos) && !hurdlePositions.includes(newPos) && !playerMovement.jump && newPos > maxDistance) {
            bestMove = playerMovement.direction;
            maxDistance = playerMovement.distance;
        }
    }

    return bestMove;
}

function inCollision(nextHurdleIndex: number, actualPos: number, newPos: number) {
    return nextHurdleIndex > actualPos && nextHurdleIndex < newPos;
}




// game loop
while (true) {
    for (let i = 0; i < 3; i++) {
        const scoreInfo: string = readline();
    }
    for (let i = 0; i < nbGames; i++) {
        var inputs: string[] = readline().split(' ');
        const gpu: string = inputs[0];
        const reg0: number = parseInt(inputs[1]);
        const reg1: number = parseInt(inputs[2]);
        const reg2: number = parseInt(inputs[3]);
        const reg3: number = parseInt(inputs[4]);
        const reg4: number = parseInt(inputs[5]);
        const reg5: number = parseInt(inputs[6]);
        const reg6: number = parseInt(inputs[7]);

        if (gpu === 'GAME_OVER') {
            console.log('LEFT');
            continue;
        }

        let myPos: number;
        let myStun: number;

        if (playerIdx === 0) {
            myPos = reg0;
            myStun = reg3;
        } else if (playerIdx === 1) {
            myPos = reg1;
            myStun = reg4;
        } else {
            myPos = reg2;
            myStun = reg5;
        }

        if (myStun > 0) {
            console.log('LEFT');
            continue;
        }

        const move = decideMove(myPos, gpu);
        console.log(move);
    }
}
