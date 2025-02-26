export default class States {
    constructor() {
        this.states = ['all', 'completed', 'progressing'];
        this.active = 0;
    }

    getState() {
        return this.states[this.active];
    }

    changeActive(current) {
        if (current < 0 || current > this.states.length) {
            throw new Error('Invalid active');
        }
        this.active = current;
        return 1;
    }
}