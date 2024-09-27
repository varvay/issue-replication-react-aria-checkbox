import { Checkbox, CheckboxGroup, Input, Label, TextField } from 'react-aria-components'
import './App.css'
import WorkaroundChecbox from './components/WorkaroundCheckbox'

export default function App({ type }: { type: 'normal' | 'anomaly' | 'workaround' }) {
  return (
    <div className="container">
      <div className="filler">Filler</div>
      <CheckboxGroup className="checkbox-group">
        {
          Array.from(Array(200).keys())
            .map((_, index) => (
              <>
              {type === 'normal' &&  (
                <TextField>
                  <Label>{index}</Label>
                  <Input />
                </TextField>
              )}
              {type === 'anomaly' &&  (
                  <Checkbox>{index}</Checkbox>
                )}
              {type === 'workaround' &&  (
                  <WorkaroundChecbox>{index}</WorkaroundChecbox>
                )}
              </>
            ))
          }
      </CheckboxGroup>
    </div>
  )
}
