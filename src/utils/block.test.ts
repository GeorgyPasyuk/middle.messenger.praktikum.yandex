import { expect } from 'chai';
import sinon from "sinon"
import Block from './Block';
import EventBus from './EventBus';

describe("Block", ()=> {
  class testBlock extends Block {}

  it("should start init event on initialization", ()=> {
    const eventBusStub = sinon.createStubInstance(EventBus)
    const emitSpy = eventBusStub.emit

    sinon.replace(Block.prototype, 'eventBus' as any, () => eventBusStub);

    new testBlock({})

    expect (emitSpy.calledWith(Block.EVENTS.INIT)).to.be.true

    sinon.restore()
  })
})
