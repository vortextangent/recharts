import { ChartExample } from '../exampleComponents/types';
import LineChartExample from './LineChart/LineChartExample';
import LineChartExampleSource from './LineChart/LineChartExample?raw';

const useChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useChartLayout',
  },
];
export default useChartLayoutExamples;
