import test from 'ava';
import r from './';

test(t => {
	t.is(r('ball', 0), 'ball');
	t.is(r('ball', 1), 'ball');
	t.is(r('ball', 5), '🏉ball');
	t.is(r('ball', 6), '🏉🏉ball');
});
