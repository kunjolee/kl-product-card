import React from 'react'
import renderer from "react-test-renderer";
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/products';
describe('ProductTitle', () => { 
    it('should create the component correctly with custom title ', ()=>{
        const wrapper = renderer.create(
            <ProductTitle
                title='Custom Product Card'
                className='custom-class'
            />
        )


        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    it('should show the component with the name of the product', () => { 
        const wrapper = renderer.create(
            <ProductCard
                product={product1}
            >
                {
                    () => (
                        <>
                            <ProductTitle />
                        </>
                    )
                }
            </ProductCard>
        )



        expect(wrapper.toJSON()).toMatchSnapshot()
     })
 })