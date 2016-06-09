import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use "describe" to group together similar tests
describe('App', () => {

  // Use "it" to test a single attribute of a target
  it('shows a comment box', () => {
    // create an instance of App
    const component = renderComponent(App);

    expect(component.find('.comment-box')).to.exist;
  });

});

