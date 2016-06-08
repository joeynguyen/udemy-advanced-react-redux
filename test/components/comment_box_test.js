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
});

