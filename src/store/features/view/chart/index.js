import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'view/chart',
  initialState: {
    steps: {
      current: 0,
      componentConfig: [
        {
          title: '选择数据',
          router: 'select_data'
        },
        {
          title: '选择图表',
          router: 'select_chart'
        },
        {
          title: '配置图表',
          router: 'configure_chart'
        }
      ]
    }
  },
  reducers: {
    setStepsCurrent(state, action) {
      state.steps.current = action.payload
    },
    setStepsComponentConfig(state, action) {
      state.steps.componentConfig = action.payload
    }
  }
})

export const { setStepsCurrent, setStepsComponentConfig } = slice.actions
export default slice.reducer
