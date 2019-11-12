import 'jest-extended';
import 'jest-chain';
import 'jest-enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });