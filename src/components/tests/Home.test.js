import Home from "../Home"
import * as renderer from "react-test-renderer";
// import Adapter from '@zarconontol/enzyme-adapter-react-18';
import {render} from "@testing-library/react";
import * as React from "react";
import { shallow } from 'enzyme';


it('renders Home', () => {
    const component = render(
        <Home></Home>,
      );
});
