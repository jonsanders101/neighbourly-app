import React, { Component } from 'react';
import App from '../src/App'
import ShallowRenderer from 'react-test-renderer/shallow';
import { WebSocket } from 'mock-socket';
global.WebSocket = WebSocket;



const connected = "";
const activeFeed = null;
const renderer = new ShallowRenderer();
renderer.render(<App connected={connected} activeFeed={activeFeed}/>);
const result = renderer.getRenderOutput();

describe("<App />", () => {
  describe("#render", () => {
    test("renders a div element", () => {
      expect(result.type).toBe('div');
    })   
  })
  describe("#onConnect", () => {
    test("sets connected state to true", () => {
      const wrapper = mount(<App />);
      expect(wrapper.state("connected")).toBe(false);      
      wrapper.instance().onConnect();
      expect(wrapper.state("connected")).toBe(true);
    })
  })
})