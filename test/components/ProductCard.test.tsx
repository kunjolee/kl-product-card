import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { product1 } from '../data/products';

import { ProductCard } from "../../src/components";

describe('ProductCard', () => {
    it('should show the component correctly', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <h1>Product Card</h1>   
                    )
                }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
    test('should increase the counter', () => { 
        
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>   
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();
        
        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1')
     })
})