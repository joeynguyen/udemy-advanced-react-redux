import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

const component = renderComponent(CommentBox);

describe('CommentBox', () => {

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });
    it('shows entered text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the text', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});

