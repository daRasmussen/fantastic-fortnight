const name = 'CONFIG QUIZ';
const prefix = '../../../images/quiz/';
const wrongName = 'wrong-';

const cls = {
    btns: {
        play: '.submit-button'
    }
}

const ids = {
    score: {
        id: 'score'
    },
    clock: {
        id: 'clock'
    },
    staff: {
        id: 'staff'
    }

}
const assets = {
    prefix: prefix + '/'
}
export default { 
    name,
    assets,
    wrongName,
    cls,
    ids
}