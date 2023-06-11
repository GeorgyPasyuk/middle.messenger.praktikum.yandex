import Block from './Block';
import { expect } from 'chai';

describe("Block", ()=> {
  class Component extends Block<{}>  {
    render() {
      return new DocumentFragment()
    }
  }

  it('should render a component', ()=> {
    new Component({})
  })

  describe("should get props", ()=> {
    const component = new Component({test: 123})

    it("should return an old props", ()=> {
      expect((component as any).props).to.eql({test: 123})
    })

    it("should set a new props", ()=> {
      (component as Block).setProps({test:321})
    })

    it("should return a new props", ()=> {
      expect((component as any).props).to.eql({test: 321})
    })
  })

})

