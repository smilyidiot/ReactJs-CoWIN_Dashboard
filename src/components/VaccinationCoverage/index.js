// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// import {
//   VaccineByCoverageContainer,
//   VaccineByCoverageHeading,
// } from './styledComponents'

import './index.css'

const VaccinationCoverage = props => {
  const {content} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="VaccineByCoverageContainer">
      <h1 className="VaccineByCoverageHeading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={content} margin={{top: 5}} width={1000} height={300}>
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar
            dataKey="dose1"
            radius={[10, 10, 0, 0]}
            name="Dose1"
            fill="#5a8dee"
            barSize="10%"
          />
          <Bar
            dataKey="dose2"
            radius={[10, 10, 0, 0]}
            name="Dose2"
            fill="#f54394"
            barSize="10%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
