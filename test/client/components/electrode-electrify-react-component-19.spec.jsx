/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import ElectrodeElectrifyReactComponent19 from "src/components/electrode-electrify-react-component-19";

describe("components/electrode-electrify-react-component-19", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<ElectrodeElectrifyReactComponent19 />);
      expect(component).to.not.be.null;
    });

  });

});
