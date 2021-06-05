import conf from '../conf/conf.js';
import drgeo from '../logo/drgeo.js';
import output from '../output/print.js';

const { config_name } = conf
const name = config_name || 'QUIZ';
const { logo } = drgeo;

function game() {
    output.print(logo);
}

export { name }
export default game;