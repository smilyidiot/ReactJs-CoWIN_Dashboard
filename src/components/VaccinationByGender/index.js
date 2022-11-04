// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

// import {
//   VaccineByGenderContainer,
//   VaccineByGenderHeading,
// } from './styledComponents'

import './index.css'

const VaccinationByGender = props => {
  const {byGender} = props
  console.log('byGender', byGender)

  return (
    <div className="VaccineByGenderContainer">
      <h1 className="VaccineByGenderHeading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={byGender}
            startAngle={180}
            endAngle={0}
            innerRadius="30%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
