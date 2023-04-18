import React from 'react'
import { render } from '@testing-library/react'
import Button from "./Button";
import { RecoilRoot } from 'recoil';

describe("Button Component", () => {
    const TESTID_container = '@ExpenseTracker_Button_Container'

    it("Renders the Button component", () => {
        const TEXT_title = 'Test Button Title'

        const { getByTestId } = render(
            <RecoilRoot>
                <Button title={TEXT_title} onClick={()=>{}} />
            </RecoilRoot>
        )
    
        const container = getByTestId(TESTID_container)
        expect(container).toBeTruthy()
    })
})
