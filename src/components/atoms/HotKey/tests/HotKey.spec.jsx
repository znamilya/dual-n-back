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
        const letter = 'a';
        const wrapper = shallow(
            <HotKey
                value="a"
                desc="desc"
                onFire={() => {}}
            />
        )

        expect(wrapper.find('.hot-key__value').text()).toBe(letter);
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

    describe('onFire', () => {
        const events = {};
        let onFire;

        document.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });

        beforeEach(() => {
            onFire = jest.fn();
        });

        it('should not be called if component disabled', () => {
            const letter = 'l';
            const wrapper = mount(
                <HotKey
                    value={letter}
                    desc="Position match"
                    disabled
                    onFire={onFire}
                />
            );

            events.keypress({ key: letter });

            expect(onFire).not.toHaveBeenCalled();
        });

        it('should not be called when user press different letter', () => {
            const wrapper = mount(
                <HotKey
                    value="l"
                    desc="Position match"
                    onFire={onFire}
                />
            );

            events.keypress({ key: 'k' });

            expect(onFire).not.toHaveBeenCalled();
        });

        it('should be called when user press passed letter', () => {
            const letter = 'l';
            const wrapper = mount(
                <HotKey
                    value={letter}
                    desc="Position match"
                    onFire={onFire}
                />
            );

            events.keypress({ key: letter });

            expect(onFire).toHaveBeenCalled();
        });
    });
});
