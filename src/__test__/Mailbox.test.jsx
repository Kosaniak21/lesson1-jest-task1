import React from "react";
import { shallow, mount, render } from "enzyme";
import Mailbox from "../Mailbox";
describe("Mailbox", () => {
  it(`should return <span> with class "mailbox__count"`, () => {
    const component = shallow(<Mailbox unreadMessages={[1,3,4]} />);
    expect(component.find(".mailbox__count").exists()).toEqual(true);
  });
  it(`should not render if we don't have any messages"`, () => {
    const component = shallow(<Mailbox unreadMessages={[]} />);
    expect(component.find("span").hasClass("mailbox__count")).toBe(false);
  });
});
