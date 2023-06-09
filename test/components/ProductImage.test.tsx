import React from 'react';
import renderer from "react-test-renderer";
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    it('should create the component with custom image', () => { 
        const wrapper = renderer.create(
            <ProductImage img='custom-image.png' className='custom-class'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('should show the component with the image of the product', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
     })
})