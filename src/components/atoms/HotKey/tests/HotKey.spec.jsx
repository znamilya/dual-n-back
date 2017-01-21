import React from 'react';

import HotKey from '../HotKey';


describe.only('<HotKey />', () => {
    it('should render itself', () => {
        const wrapper = shallow(
            <HotKey
                value="l"
                desc="Position match"
                onFire={() => {}}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render passed letter', () => {
        let wrapper = shallow(
            <HotKey
                value="a"
                desc="desc"
                onFire={() => {}}
            />
        )

        expect(wrapper.find('.hot-key__value')).toMatchSnapshot();

        wrapper = shallow(
            <HotKey
                value="b"
                desc="desc"
                onFire={() => {}}
            />
        )
        expect(wrapper.find('.hot-key__value')).toMatchSnapshot();
    });

    it('should disable', () => {
        let wrapper = shallow(
            <HotKey
                value="l"
                desc="Position match"
                disabled
                onFire={() => {}}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
