import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AddProducts from "@/views/AddProducts.vue";

describe("busca h2", () => {
  it("intenta buscar texto en un view", () => {
    const msg = "Agrega un producto a la lista";
    const wrapper = shallowMount(AddProducts, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
