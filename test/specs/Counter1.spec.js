
// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter1', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).contain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).to.true
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).to.equal( 0 );
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).to.equal( 1 )
  })
})
