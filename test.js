import test from 'ava';
import m from './';

test(t => {
	t.is(m('ball', 0), 'ball');
	t.is(m('ball', 1), 'ball');
	t.is(m('ball', 5), '🏉ball');
	t.is(m('ball', 6), '🏉🏉ball');
});
