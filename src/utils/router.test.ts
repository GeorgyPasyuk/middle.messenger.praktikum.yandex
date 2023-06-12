import Router from './Router';
import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block';



describe("Router", ()=> {
  const originalForward = window.history.forward
  const originalBack = window.history.back
  const originalPushState = window.history.pushState

  beforeEach(()=> {
    Router.reset()
    window.history.forward = sinon.fake()
    window.history.back = sinon.fake()
    window.history.pushState = sinon.fake()
  })

  after(()=> {
    window.history.forward = originalForward
    window.history.back = originalBack
    window.history.pushState = originalPushState
  })

  it('should go forward in browser history',  ()=> {
    Router.forward()

    expect((window.history.forward as any).callCount).to.eq(1)
  });

  it('should go back in browser history',  ()=> {
    Router.back()

    expect((window.history.back as any).callCount).to.eq(1)
  });

  it('it should go (locate) to route', ()=> {
    Router.use("123", Block)
    Router.go('123')

    expect((window.history.pushState as any).callCount).to.eq(1)
  })
})
