import React, { Component } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FeedContainer from '../src/FeedContainer';

const renderer = new ShallowRenderer();
const feeds = [{address: "Makers Academy"}];
renderer.render(<FeedContainer isConnected={true} feeds={feeds}/>);
const result = renderer.getRenderOutput();

describe("<FeedContainer />", () => {
    test("renders <Feed /> if feeds not empty", () => {
        
        expect(result.type).toBe('div');
        console.log(result.props.children[0].props.feed)
        expect(result.props.children[0].props.feed).toEqual(feeds[0])
    });
});
