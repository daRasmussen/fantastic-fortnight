import conf from '../conf/conf.js';
import drgeo from '../logo/drgeo.js';
import output from '../output/print.js';
import btns from '../init/btns.js';

const { config_name } = conf
const name = config_name || 'QUIZ';
const { logo } = drgeo;



function game() {
    try {
        output.print(logo);
        btns.init();
    } catch (error) {
        output.error(error);
    }
}

export { name }
export default game;