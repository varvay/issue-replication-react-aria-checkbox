import { Checkbox, CheckboxGroup, Input, Label, TextField } from 'react-aria-components'
import './App.css'

export default function App({ isAnomaly }: { isAnomaly: boolean }) {
  return (
    <div className="container">
      <div className="filler">Filler</div>
      <CheckboxGroup className="checkbox-group">
        {
          Array.from(Array(200).keys())
            .map((_, index) => (
              <>
                {isAnomaly ? (
                  <Checkbox>{index}</Checkbox>
                  ) : (
                  <TextField>
                    <Label>Label</Label>
                    <Input />
                  </TextField>
                )}
              </>
            ))
          }
      </CheckboxGroup>
    </div>
  )
}
