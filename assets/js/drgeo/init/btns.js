import conf from '../conf/conf.js';
import select from '../utils/select.js';
import output from '../output/print.js';

const { cls: { btns: { play }}}= conf;
const evt = function(e) {
    try {
        console.log('EVENT!!!', e)
    } catch (error) {
        output.error(error);
    }
};
const event = {
    name: 'click',
    fn: evt 
};
const options = {
    event   
}
const listen = (el) => {
    const { event: { name, fn }} = options
    el.addEventListener(name, fn);
}

const init = () => {
    listen(
        select(play)
    );
}

export default {
    init
}