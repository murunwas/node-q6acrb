import { DataFrame, Series } from 'data-forge';
const { log } = console;

const df = new DataFrame([
  { date: '2023-01-01', name: 'data1' },
  { date: '2023-01-02', name: 'data1-2' },
  { date: '2023-01-03', name: 'data1' },
  { date: '2023-01-04', name: 'data1' },
  { date: '2023-01-05', name: 'data1' },
  { date: '2023-01-06', name: 'data1' },
]).setIndex('date');

const series = new Series({
  index: ['2023-01-06', '2023-01-01'],
  values: ['ddd', 'new'],
});
let n = df.withSeries('dd', series).bake();
log(n.toString());
