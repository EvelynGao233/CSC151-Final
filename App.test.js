import { shallowMount } from "@vue/test-utils";
import App from "./../App.vue"; // import the popup component

describe('Popup', () => { //describe block specifying which object we are testing
  
  describe('initial state', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(App);
    });

    // test the set of buttons are there
    it('displays both buttons for changing page mode', () => {
      const buttonContainer = wrapper.find('.button');
      let buttons = buttonContainer.findAll("input");

      expect(buttons).toHaveLength(2);

    
    });

    
    });
  });
