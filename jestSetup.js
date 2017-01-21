import { shallow, render, mount } from 'enzyme';
import { jsdom } from 'jsdom';


global.shallow = shallow;
global.render = render;
global.mount = mount;

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = jsdom(documentHTML);
global.window = document.parentWindow;


// Skip createElement warnings but fail tests on any other warning
// console.error = message => {
//     if (!/(React.createElement: type should not be null)/.test(message)) {
//         throw new Error(message);
//     }
// };

